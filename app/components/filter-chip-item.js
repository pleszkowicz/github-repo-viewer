import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FilterChipItemComponent extends Component {
  @tracked _isSelected;

  constructor() {
    super(...arguments);

    this._isSelected = this.args.isSelected;
  }

  @action
  toggleSelection() {
    if (this.args.onSelectionChange) {
      this._isSelected = !this._isSelected;

      this.args.onSelectionChange(this.args.name, this._isSelected);
    }
  }
}
