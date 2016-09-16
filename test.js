var yearOfRat = require('./');
var test = require('tape');

test('it should check if a year is year of rat', function(t) {
  t.plan(4);
  t.equal(yearOfRat(1984), true, "1984 is year of rat");
  t.equal(yearOfRat(1985), false, "1985 is not year of rat");
  t.equal(yearOfRat(new Date(1996, 0)), true, "1996 is year of rat");
  t.equal(typeof yearOfRat() === 'boolean', true);
});
