import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filters', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with the correct data-test-id', async function (assert) {
    this.set('noop', () => {});

    await render(hbs`
      <Filters
        @showPrivate={{true}}
        @showPublic={{false}}
        @programmingLanguages={{array "JavaScript" "Python"}}
        @togglePrivate={{this.noop}}
        @togglePublic={{this.noop}}
        @updateSelectedLanguages={{this.noop}}
      />
    `);

    assert
      .dom('[data-test-id="filters"]')
      .exists('The component renders with the correct test ID');
  });
});
