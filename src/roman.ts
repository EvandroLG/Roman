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
    let concat = '';
    let copyValue = value;

    for (const key of Object.keys(SYMBOLS)) {
      while (copyValue >= SYMBOLS[key]) {
        concat = concat + key;
        copyValue = copyValue - SYMBOLS[key];
      }
    }

    return concat;
  },

  toNumber(value: string) {
    let sum = 0;
    const upper = value.toUpperCase();

    for (let i = 0; i < upper.length; i++) {
      const key = upper[i];
      const nextKey = upper[i + 1];
      const filterI = key === 'I' && ['V', 'X'].includes(nextKey);
      const filterX = key === 'X' && ['L', 'C'].includes(nextKey);
      const filterC = key === 'C' && ['D', 'M'].includes(nextKey);

      if (filterI || filterX || filterC) {
        sum = sum + SYMBOLS[nextKey] - SYMBOLS[key];
        i = i + 1;
        continue;
      }

      sum = sum + SYMBOLS[key];
    }

    return sum;
  },
};

export default Roman;
