const summation = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(summation(1, 2)).toBe(3);
});
