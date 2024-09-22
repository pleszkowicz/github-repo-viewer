import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | repository-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders repository details and handles toggle expansion', async function (assert) {
    // Mocking the GitHub service
    this.owner.lookup('service:github').fetchBranches = async () => [
      { name: 'main' },
      { name: 'develop' },
    ];

    // Set up repository data
    this.set('repository', {
      name: 'Test Repo',
      organization: 'test-org',
    });

    // Render the component
    await render(hbs`
      <RepositoryItem
        @repository={{this.repository}}
        @organization="test-org"
      />
    `);

    // Check if the repository name is rendered
    assert
      .dom('[data-test-id="repository-name"]')
      .hasText('Test Repo', 'Repository name is displayed');

    // Simulate clicking the expand button
    await click('[data-test-id="expand-branches-button"]');

    // Check if the branches are fetched and displayed
    assert
      .dom('[data-test-id="branches-list"]')
      .exists('Branch list is displayed after expansion');
    assert
      .dom('[data-test-id="branches-item"]')
      .exists({ count: 2 }, 'Two branches are displayed');

    // Simulate clicking the expand button again to collapse
    await click('[data-test-id="expand-branches-button"]');
    assert
      .dom('[data-test-id="branches-list"]')
      .doesNotExist('Branch list is hidden after collapse');
  });
});
