import { module, test } from 'qunit';
import { setupTest } from 'github-repo-viewer/tests/helpers';

module('Unit | Route | logout', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:logout');
    assert.ok(route);
  });
});
