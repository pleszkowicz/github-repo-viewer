import { module, test } from 'qunit';
import { setupTest } from 'github-repo-viewer/tests/helpers';

module('Unit | Route | organization', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:organization');
    assert.ok(route);
  });
});
