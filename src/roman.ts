const SYMBOLS: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const Roman = {
  isRoman() {},
  toRoman() {},

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
