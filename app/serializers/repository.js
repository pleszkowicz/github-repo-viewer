import ApplicationSerializer from './application';

export default class RepositorySerializer extends ApplicationSerializer {
  primaryKey = 'id';

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // The payload is an array of repositories
    // We need to wrap it in an object with a key matching the model name
    payload = { repositories: payload };

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }

  // Optionally, if you need to normalize individual records
  normalize(modelClass, resourceHash, prop) {
    // Map GitHub API fields to your model attributes if necessary
    return super.normalize(modelClass, resourceHash, prop);
  }
}
