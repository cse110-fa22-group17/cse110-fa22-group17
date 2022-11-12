const posOrNeg = require('./example');

test('should return damage sentence when called correctly', () => {
  const result = posOrNeg('Alex', 10);
  expect(result).toBe('Alex says 10');
});