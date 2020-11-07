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

    const output = value
      .toUpperCase()
      .split('')
      .reduce(
        (acc, cur, idx, str) => {
          if (acc.skip) {
            acc.skip = false;
            return acc;
          }

          const nextKey = str[idx + 1];
          const filterI = cur === 'I' && ['V', 'X'].includes(nextKey);
          const filterX = cur === 'X' && ['L', 'C'].includes(nextKey);
          const filterC = cur === 'C' && ['D', 'M'].includes(nextKey);

          if (filterI || filterX || filterC) {
            acc.skip = true;
            acc.sum = acc.sum + symbols[nextKey] - symbols[cur];
            return acc;
          }

          acc.sum = acc.sum + symbols[cur];
          return acc;
        },

        { skip: false, sum: 0 }
      );

    return output.sum;
  },
};

export default Roman;
