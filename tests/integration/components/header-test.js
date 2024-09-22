import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and displays user information if authenticated', async function (assert) {
    // Mocking the auth service to simulate an authenticated user
    this.owner.lookup('service:auth').isAuthenticated = true;
    this.owner.lookup('service:auth').currentUser = { name: 'Test User' };

    // Render the component
    await render(hbs`<Header />`);

    // Check if the component renders
    assert.dom('header').exists('The header component renders');

    // Check if the user information is displayed when authenticated
    assert
      .dom('[data-test-id="header-authenticated-info-message"]')
      .hasText('You are authenticated. Logout', 'Auth message displayed');
  });

  test('it does not display user information if not authenticated', async function (assert) {
    // Mocking the auth service to simulate a non-authenticated user
    this.owner.lookup('service:auth').isAuthenticated = false;

    // Render the component
    await render(hbs`<Header />`);

    // Check if the component renders
    assert.dom('header').exists('The header component renders');

    // Check that user information is not displayed when not authenticated
    assert
      .dom('[data-test-id="header-authenticated-info-message"]')
      .doesNotExist('The user information is not displayed');
  });
});
