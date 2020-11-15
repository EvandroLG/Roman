export const SYMBOLS: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export const KEYS = Object.keys(SYMBOLS);
export const REGEX = /CM|CD|XC|XL|IX|IV|CM|M|D|C|L|X|V|I/g;
