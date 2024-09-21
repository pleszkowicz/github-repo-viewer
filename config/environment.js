'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'github-repo-viewer',
    environment,
    rootURL: '/', // Keep this as '/' for development and set it explicitly for production
    locationType: 'history', // Default for development and testing

    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features
      },
    },

    'ember-simple-auth': {
      store: 'session-store:local-storage',
      localStorageKey: 'ember_simple_auth-session',
    },

    APP: {
      // Application-specific settings
    },
  };

  if (environment === 'development') {
    // Development-specific settings
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Set the correct rootURL only once for production
    ENV.rootURL = '/github-repo-viewer/';

    // Use 'hash' location type for routing
    ENV.locationType = 'history';

    // Ensure no additional prepending of rootURL in fingerprinting
    ENV.fingerprint = {
      prepend: 'https://pleszkowicz.github.io/github-repo-viewer/', // Prepend full URL path for assets
    };
  }

  return ENV;
};
