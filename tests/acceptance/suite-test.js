import { test } from 'qunit';
import moduleForAcceptance from 'buildman/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | suite');

test('visiting /suite', function(assert) {
  visit('/suite');

  andThen(function() {
    assert.equal(currentURL(), '/suite');
  });
});
