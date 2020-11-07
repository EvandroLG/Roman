const Roman = {
  isRoman() {},
  numberToRoman() {},

  toNumber(value: string) {
    const symbols: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let acc = 0;
    const upper = value.toUpperCase();

    for (let i = 0; i < upper.length; i++) {
      const key = upper[i];
      const nextKey = upper[i + 1];
      const filterI = key === 'I' && ['V', 'X'].includes(nextKey);
      const filterX = key === 'X' && ['L', 'C'].includes(nextKey);
      const filterC = key === 'C' && ['D', 'M'].includes(nextKey);

      if (filterI || filterX || filterC) {
        acc = acc + symbols[nextKey] - symbols[key];
        i = i + 1;
        continue;
      }

      acc = acc + symbols[key];
    }

    return acc;
  },
};

export default Roman;
