import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | repository-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a list of repositories', async function (assert) {
    // Set up repository data
    this.set('repositories', [
      { name: 'Repo 1', organization: 'org-1' },
      { name: 'Repo 2', organization: 'org-2' },
    ]);

    // Render the component
    await render(hbs`
      <RepositoryList @repositories={{this.repositories}} />
    `);

    // Check if the list contains two repository items
    assert
      .dom('[data-test-id="repository-item"]')
      .exists({ count: 2 }, 'Two repository items are rendered');

    // Get all the elements and verify the text for each one
    const repositoryNames = this.element.querySelectorAll(
      '[data-test-id="repository-name"]',
    );

    assert.strictEqual(
      repositoryNames[0].textContent.trim(),
      'Repo 1',
      'First repository name is rendered',
    );
    assert.strictEqual(
      repositoryNames[1].textContent.trim(),
      'Repo 2',
      'Second repository name is rendered',
    );
  });
});
