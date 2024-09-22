import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/token-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Forms::TokenForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Forms::TokenForm>
        template block text
      </Forms::TokenForm>
    `);

    assert.dom().hasText('template block text');
  });
});
