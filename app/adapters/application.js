import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapter {
  @service auth;

  get headers() {
    let headers = {};

    if (this.auth.isAuthenticated && this.auth.accessToken) {
      headers['Authorization'] = `token ${this.auth.accessToken}`;
      headers['Accept'] = 'application/vnd.github+json';
    }

    return headers;
  }

  host = 'https://api.github.com';

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = super.buildURL(...arguments);

    if (modelName === 'repository') {
      if (requestType === 'query' && query?.adapterOptions) {
        let { organization } = query.adapterOptions;
        url = `${this.host}/orgs/${organization}/repos`;
      }
    } else if (modelName === 'branch') {
      if (requestType === 'query' && query?.adapterOptions) {
        let { organization, repositoryName } = query.adapterOptions;
        url = `${this.host}/repos/${organization}/${repositoryName}/branches`;
      }
    }

    // clean up adapterOptions to avoid sending them as query param to the end url
    query.adapterOptions = {};
    return url;
  }

  handleResponse(status, headers, payload) {
    const response = super.handleResponse(...arguments);

    // Attach headers, including the link headers, to the payload for the serializer
    if (headers) {
      payload.headers = headers; // Attach headers to payload so they can be extracted in the serializer
    }

    return response;
  }
}
