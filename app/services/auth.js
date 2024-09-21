import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AuthService extends Service {
  @service storage;

  @tracked accessToken = null;
  @tracked isAuthenticated = false;

  localStorageKey = 'githubAccessToken';

  constructor() {
    super(...arguments);
    this.restoreSession();
  }

  // Restore the session from storage
  restoreSession() {
    // Restore access token and authentication status
    let token = this.storage.getItem(this.localStorageKey);
    if (token) {
      this.accessToken = token;
      this.isAuthenticated = true;
    }
  }

  // Authenticate the user with the provided access token
  async authenticate(accessToken) {
    if (!accessToken) {
      throw new Error('Access token is required');
    }

    // Verify the token with GitHub's API
    let isValid = await this.verifyAccessToken(accessToken);
    if (isValid) {
      this.accessToken = accessToken;
      this.isAuthenticated = true;
      this.storage.setItem(this.localStorageKey, accessToken);
    } else {
      throw new Error('Invalid access token');
    }
  }

  // Invalidate the session
  invalidate() {
    this.accessToken = null;
    this.isAuthenticated = false;

    this.storage.removeItem(this.localStorageKey);
  }

  // Verify the access token with GitHub's API
  async verifyAccessToken(token) {
    try {
      let response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      return response.ok;
    } catch (error) {
      console.error('Error verifying access token:', error);
      return false;
    }
  }
}
