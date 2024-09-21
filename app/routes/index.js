import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service auth;
  @service router;

  redirect() {
    if (this.auth.isAuthenticated) {
      this.router.transitionTo('organization');
    } else {
      window.location.replace('/login');
    }
  }
}
