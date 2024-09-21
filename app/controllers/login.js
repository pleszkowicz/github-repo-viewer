import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service auth;
  @service router;

  @tracked errorMessage = '';

  @action
  async authenticate(e) {
    try {
      e.preventDefault();
      await this.auth.authenticate(this.accessToken);

      if (this.auth.isAuthenticated) {
        this.router.transitionTo('organization');
      }
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  @action
  updateAccessToken(event) {
    this.accessToken = event.target.value;
  }
}
