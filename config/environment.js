'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'github-repo-viewer',
    environment,
    rootURL: '/',
    locationType: 'history', // default for development

    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
      },
    },

    'ember-simple-auth': {
      store: 'session-store:local-storage',
      localStorageKey: 'ember_simple_auth-session',
    },

    APP: {
      // Flags/options to your application instance when it is created
    },
  };

  if (environment === 'development') {
    // Development specific options
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Update the rootURL to match the GitHub Pages subdirectory
    ENV.rootURL = '/github-repo-viewer/';

    // Use 'hash' location type for GitHub Pages
    ENV.locationType = 'hash';
  }

  return ENV;
};
