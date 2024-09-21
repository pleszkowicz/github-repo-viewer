import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import fetch from 'fetch';

export default class GithubAuthenticator extends BaseAuthenticator {
  async authenticate(accessToken) {
    if (!accessToken) {
      throw new Error('Access token is required');
    }

    // Optionally, verify the token with GitHub's API
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Invalid access token');
    }

    // Return the session data to be stored
    return { accessToken };
  }

  async restore(data) {
    if (data && data.accessToken) {
      // Optionally, verify the token with GitHub's API
      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `token ${data.accessToken}`,
        },
      });

      if (response.ok) {
        // If valid, resolve and restore the session
        return { accessToken: data.accessToken };
      } else {
        // If the token is invalid, reject to indicate the session cannot be restored
        throw new Error('Invalid access token');
      }
    } else {
      // If no token is found, reject
      throw new Error('No access token found in session data');
    }
  }

  async invalidate() {
    // Perform any cleanup if necessary
    // Since we're only storing the token client-side, we can resolve immediately
    return;
  }
}
