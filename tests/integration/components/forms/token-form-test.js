import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/token-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and updates access token input', async function (assert) {
    // Mocking services
    this.owner.lookup('service:auth').authenticate = async () => true;

    // Render the component
    await render(hbs`<Forms::TokenForm />`);

    // Check if the input field is rendered
    assert.dom('input').exists('The access token input is rendered');

    // Simulate typing an access token
    await fillIn('input', '12345');

    // Verify that the input value is updated correctly
    assert.dom('input').hasValue('12345', 'Input value is updated');

    // Simulate form submission
    await click('button[type="submit"]');
  });
});
