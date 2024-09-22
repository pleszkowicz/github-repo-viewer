import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default class ApplicationSerializer extends RESTSerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  keyForRelationship(key) {
    return underscore(key);
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // The payload is an array of repositories
    // We need to wrap it in an object with a key matching the model name
    const pluralizedKey = pluralize(primaryModelClass.modelName);

    payload = { [pluralizedKey]: payload };

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
}
