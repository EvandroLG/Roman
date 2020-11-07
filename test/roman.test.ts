import Roman from '../src';

test('romanToNumber', () => {
  expect(Roman.toNumber('III')).toBe(3);
  expect(Roman.toNumber('IV')).toBe(4);
  expect(Roman.toNumber('IX')).toBe(9);
  expect(Roman.toNumber('XL')).toBe(40);
  expect(Roman.toNumber('XC')).toBe(90);
  expect(Roman.toNumber('CD')).toBe(400);
  expect(Roman.toNumber('CM')).toBe(900);
  expect(Roman.toNumber('LVIII')).toBe(58);
  expect(Roman.toNumber('MCMXCIV')).toBe(1994);
});
