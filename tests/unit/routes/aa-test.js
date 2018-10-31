import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | aa', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:aa');
    assert.ok(route);
  });
});
