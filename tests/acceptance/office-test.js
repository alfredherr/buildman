import { test } from 'qunit';
import moduleForAcceptance from 'buildman/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | office');

test('visiting /office', function(assert) {
  visit('/office');

  andThen(function() {
    assert.equal(currentURL(), '/office');
  });
});
