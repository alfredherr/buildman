import { test } from 'qunit';
import moduleForAcceptance from 'buildman/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | executive');

test('visiting /executive', function(assert) {
  visit('/executive');

  andThen(function() {
    assert.equal(currentURL(), '/executive');
  });
});
