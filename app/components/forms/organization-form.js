import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class OrganizationFormComponent extends Component {
  @tracked organization = this.args.organization || '';

  @action
  updateOrganization(event) {
    this.organization = event.target.value;
  }

  @action
  onSubmit(e) {
    e.preventDefault();
    this.organization = this.organization.trim();

    this.args.onSubmit(this.organization);
  }
}
