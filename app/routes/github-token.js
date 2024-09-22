import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GithubTokenRoute extends Route {
  @service auth;
  @service router;
  @service storage;

  redirect() {
    if (this.auth.isAuthenticated) {
      this.router.transitionTo('index');
    }
  }
}
