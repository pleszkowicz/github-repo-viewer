import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service auth;
  @service router;

  redirect() {
    if (this.auth.isAuthenticated) {
      this.router.transitionTo('organization');
    }
  }
}
