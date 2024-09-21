import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GithubRepoViewerComponent extends Component {
  @service store;
  @service auth;
  @service storage;

  @tracked isLoading = false;
  @tracked repositories = null;
  @tracked programmingLanguages = [];
  @tracked errorMessage = '';

  @tracked organization = '';
  @tracked submittedOrganization = '';
  @tracked showPrivate = true;
  @tracked showPublic = true;
  @tracked selectedLanguages = [];

  localStorageKeys = {
    organization: 'githubOrganization',
    showPrivate: 'githubShowPrivate',
    showPublic: 'githubShowPublic',
  };

  get filteredRepositories() {
    return this.repositories.filter((repo) => {
      const matchesVisibility =
        (this.showPrivate && repo.private) ||
        (this.showPublic && !repo.private);

      const matchesLanguage =
        this.selectedLanguages.length === 0 ||
        this.selectedLanguages.includes(repo.language);

      return matchesVisibility && matchesLanguage;
    });
  }

  get showNoRepositoriesMessage() {
    return (
      this.submittedOrganization &&
      this.repositories !== null &&
      this.repositories.length === 0 &&
      !this.errorMessage
    );
  }

  constructor() {
    super(...arguments);

    this.restoreStateFromStorage();

    // Automatically fetch repositories if authenticated and organization is set
    if (this.auth.isAuthenticated && this.organization) {
      this.fetchOrganizationRepositories();
    }
  }

  retrieveProgrammingLanguages() {
    const languagesSet = new Set();

    this.repositories.forEach((repository) => {
      const language = repository.language;
      if (language) {
        languagesSet.add(language);
      }
    });

    return Array.from(languagesSet);
  }

  restoreStateFromStorage() {
    let savedOrganization = this.storage.getItem(
      this.localStorageKeys.organization,
    );
    if (savedOrganization) {
      this.organization = savedOrganization;
    }

    let savedShowPrivate = this.storage.getItem(
      this.localStorageKeys.showPrivate,
    );

    if (savedShowPrivate !== null) {
      this.showPrivate = savedShowPrivate === true;
    }

    let savedShowPublic = this.storage.getItem(
      this.localStorageKeys.showPublic,
    );

    if (savedShowPublic !== null) {
      this.showPublic = savedShowPublic === true;
    }
  }

  // Save state to storage
  saveState() {
    this.storage.setItem(this.localStorageKeys.organization, this.organization);
    this.storage.setItem(this.localStorageKeys.showPrivate, this.showPrivate);
    this.storage.setItem(this.localStorageKeys.showPublic, this.showPublic);
  }

  @action async onSubmitOrganizationForm(e) {
    e.preventDefault();

    await this.fetchOrganizationRepositories();
  }

  @action
  async fetchOrganizationRepositories() {
    if (!this.auth.isAuthenticated) {
      return;
    }

    try {
      this.isLoading = true;
      this.errorMessage = '';
      /* TODO: it would be great to add pagination, see docs:
       https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
       I ran out of time to make it working, reverted all pagination related logic
       */

      this.repositories = await this.store.query('repository', {
        page: 1,
        per_page: 100,
        adapterOptions: {
          organization: this.organization,
        },
      });

      this.submittedOrganization = this.organization;
      this.programmingLanguages = this.retrieveProgrammingLanguages();
      this.saveState();
    } catch (error) {
      const message =
        // TODO: handle other response statuses to show more meaningful error messages
        error.isAdapterError && error.errors?.at(0)?.status === '404'
          ? 'There is no such organization or you do not have sufficient permissions.'
          : '';
      this.errorMessage = message || error.message;
      this.repositories = [];
    } finally {
      this.isLoading = false;
    }
  }

  @action updateSelectedLanguages(programmingLanguage, isSelected) {
    if (isSelected) {
      this.selectedLanguages = [...this.selectedLanguages, programmingLanguage];
    } else {
      this.selectedLanguages = this.selectedLanguages.filter(
        (lang) => lang !== programmingLanguage,
      );
    }
  }

  @action
  updateOrganization(event) {
    this.organization = event.target.value;
  }

  @action
  togglePrivate() {
    this.showPrivate = !this.showPrivate;
    this.saveState();
  }

  @action
  togglePublic() {
    this.showPublic = !this.showPublic;
    this.saveState();
  }
}
