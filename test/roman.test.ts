import Roman from '../src';

test('toNumber', () => {
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

test('toRoman', () => {
  expect(Roman.toRoman(3)).toBe('III');
  expect(Roman.toRoman(4)).toBe('IV');
  expect(Roman.toRoman(9)).toBe('IX');
  expect(Roman.toRoman(40)).toBe('XL');
  expect(Roman.toRoman(90)).toBe('XC');
  expect(Roman.toRoman(400)).toBe('CD');
  expect(Roman.toRoman(900)).toBe('CM');
  expect(Roman.toRoman(58)).toBe('LVIII');
  expect(Roman.toRoman(1994)).toBe('MCMXCIV');
});
