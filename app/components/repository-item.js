import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RepositoryItemComponent extends Component {
  @service store;
  @tracked branches = null;
  @tracked isExpanded = false;
  @tracked errorMessage = '';

  get repository() {
    return this.args.repository;
  }

  @action
  async toggleExpand() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded && !this.branches) {
      try {
        // this.branches = this.repository.get('branches');
        // Set access token in the adapter
        this.branches = await this.store.query('branch', {
          adapterOptions: {
            organization: this.args.organization,
            repositoryName: this.repository.name,
          },
        });
        // this.branches = branches.toArray();
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = error.message;
        this.branches = [];
      }
    }
  }
}
