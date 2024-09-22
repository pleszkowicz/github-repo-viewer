import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TokenFormComponent extends Component {
  @service auth;
  @service router;

  @tracked errorMessage = '';
  @tracked accessToken = ''; // To store the input from the user

  @action
  async authenticate(e) {
    e.preventDefault(); // Prevent default form submission

    try {
      await this.auth.authenticate(this.accessToken);

      if (this.auth.isAuthenticated) {
        // Redirect to the organization route after successful authentication
        this.router.transitionTo('organization');
      }
    } catch (error) {
      this.errorMessage = error.message; // Set the error message if authentication fails
    }
  }

  @action
  updateAccessToken(event) {
    this.accessToken = event.target.value; // Update the tracked accessToken when user types
  }
}
