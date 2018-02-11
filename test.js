const test = require('tape');
const { isValid } = require('./dist');

test('invalid input', assert => {
    assert.notOk(isValid());
    assert.notOk(isValid(null));
    assert.notOk(isValid(false));
    assert.notOk(isValid({}));
    assert.notOk(isValid([]));
    assert.end();
});

test('valid swedish postal codes', assert => {
    assert.ok(isValid('41663'));
    assert.ok(isValid('10124'));
    assert.ok(isValid('58412'));
    assert.end();
});

test('invalid swedish postal codes', assert => {
    assert.notOk(isValid('3'));
    assert.notOk(isValid('32'));
    assert.notOk(isValid('326'));
    assert.notOk(isValid('3266'));
    assert.notOk(isValid('32663'));
    assert.notOk(isValid('32663'));
    assert.notOk(isValid('48663'));
    assert.notOk(isValid('49663'));
    assert.end();
});