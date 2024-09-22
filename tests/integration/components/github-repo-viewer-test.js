import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | github-repo-viewer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and interacts with visibility toggles', async function (assert) {
    // Mocking services and initial data
    this.owner.lookup('service:auth').isAuthenticated = true;
    this.owner.lookup('service:github').fetchRepositories = async () => [
      { private: true, language: 'JavaScript' },
      { private: false, language: 'Python' },
    ];
    this.owner.lookup('service:storage').setItem = () => {};
    this.owner.lookup('service:storage').getItem = () => null;

    // Render the component
    await render(hbs`<GithubRepoViewer />`);
    // Check if the component renders without error
    assert
      .dom('[data-test-id="github-repo-viewer"]')
      .exists('The component renders successfully');

    assert.dom('[data-test-id="repository-item"]').doesNotExist();

    await fillIn('input', '12345');

    await click('button[type="submit"]');

    // Simulate toggling private repositories visibility
    await click('[data-test-id="toggle-private"]');
    assert
      .dom('[data-test-id="toggle-private"]')
      .hasAttribute(
        'aria-checked',
        'false',
        'Private repos visibility is toggled off',
      );

    assert.dom('[data-test-id="repository-item"]').exists();

    // Simulate toggling public repositories visibility
    await click('[data-test-id="toggle-public"]');

    assert
      .dom('[data-test-id="toggle-public"]')
      .hasAttribute(
        'aria-checked',
        'false',
        'Public repos visibility is toggled off',
      );
  });
});
