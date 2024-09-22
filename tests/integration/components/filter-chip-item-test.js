import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filter-chip-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and toggles selection state', async function (assert) {
    // Set up test properties
    this.set('name', 'JavaScript');
    this.set('isSelected', false);
    this.set('onSelectionChange', (name, isSelected) => {
      assert.step(
        `onSelectionChange called with name: ${name}, selected: ${isSelected}`,
      );
    });

    // Render the component with provided args
    await render(hbs`
      <FilterChipItem
        @name={{this.name}}
        @isSelected={{this.isSelected}}
        @onSelectionChange={{this.onSelectionChange}}
      />
    `);

    // Check if the name is rendered
    assert.dom('button').hasText('JavaScript', 'Renders with the correct name');

    // Simulate a click and check if the selection toggles
    await click('button');
    assert
      .dom('button')
      .hasClass('chip-selected', 'Chip is selected after first click');

    // Assert the onSelectionChange was called
    assert.verifySteps([
      `onSelectionChange called with name: JavaScript, selected: true`,
    ]);

    // Simulate another click to toggle off
    await click('button');
    assert
      .dom('button')
      .doesNotHaveClass(
        'chip-selected',
        'Chip is not selected after second click',
      );
    assert.verifySteps([
      `onSelectionChange called with name: JavaScript, selected: false`,
    ]);
  });
});
