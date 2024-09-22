import Service, { inject as service } from '@ember/service';

export default class GithubService extends Service {
  @service store;
  @service auth;

  fetchRepositories({ organization }) {
    return this._handleRequest(() => {
      return this.store.query('repository', {
        // TODO: it would be great to add pagination, see docs:
        //  https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
        //  I ran out of time to make it working, reverted all pagination related logic
        page: 1,
        per_page: 100,
        adapterOptions: { organization },
      });
    }, 'Error fetching repositories');
  }

  fetchBranches({ organization, repositoryName }) {
    return this._handleRequest(() => {
      return this.store.query('branch', {
        page: 1,
        per_page: 100,
        adapterOptions: { organization, repositoryName },
      });
    }, 'Error fetching branches');
  }

  async _handleRequest(requestFunction, errorMessage) {
    try {
      return await requestFunction();
    } catch (error) {
      const message =
        error.isAdapterError && error.errors?.at(0)?.status === '404'
          ? 'No such organization or insufficient permissions.'
          : errorMessage;
      console.error('Error:', error);
      throw new Error(message);
    }
  }
}
