import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filter-chip-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FilterChipItem />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FilterChipItem>
        template block text
      </FilterChipItem>
    `);

    assert.dom().hasText('template block text');
  });
});
