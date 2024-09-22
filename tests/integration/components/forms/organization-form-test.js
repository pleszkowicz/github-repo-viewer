import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/organization-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Forms::OrganizationForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Forms::OrganizationForm>
        template block text
      </Forms::OrganizationForm>
    `);

    assert.dom().hasText('template block text');
  });
});
