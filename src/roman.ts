const SYMBOLS: { [key: string]: number } = {
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

const Roman = {
  isRoman() {},

  toRoman(value: number) {
    let copyValue = value;

    return Object.keys(SYMBOLS).reduce((acc, key) => {
      while (copyValue >= SYMBOLS[key]) {
        acc = acc + key;
        copyValue = copyValue - SYMBOLS[key];
      }

      return acc;
    }, '');
  },

  toNumber(value: string) {
    const match = value.match(/CM|CD|XC|XL|IX|IV|CM|M|D|C|L|X|V|I/g);

    return match?.reduce((acc, key) => {
      acc = acc + SYMBOLS[key];
      return acc;
    }, 0);
  },
};

export default Roman;
