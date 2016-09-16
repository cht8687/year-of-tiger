var yearOfTiger = require('./');
var test = require('tape');

test('it should check if a year is year of tiger', function(t) {
  t.plan(4);
  t.equal(yearOfTiger(1986), true, "1984 is year of tiger");
  t.equal(yearOfTiger(1987), false, "1985 is not year of tiger");
  t.equal(yearOfTiger(new Date(1998, 0)), true, "1996 is year of tiger");
  t.equal(typeof yearOfTiger() === 'boolean', true);
});
