import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | github-repo-viewer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GithubRepoViewer />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <GithubRepoViewer>
        template block text
      </GithubRepoViewer>
    `);

    assert.dom().hasText('template block text');
  });
});
