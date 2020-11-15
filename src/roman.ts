import { REGEX, KEYS, SYMBOLS } from './constants';

const Roman = {
  isRoman(value: string) {
    if (!value.length) return false;

    for (const s of value.split('')) {
      if (!KEYS.includes(s)) return false;
    }

    return true;
  },

  toRoman(value: number) {
    let copyValue = value;

    return KEYS.reduce((acc, key) => {
      while (copyValue >= SYMBOLS[key]) {
        acc = acc + key;
        copyValue = copyValue - SYMBOLS[key];
      }

      return acc;
    }, '');
  },

  toNumber(value: string) {
    return value.match(REGEX)?.reduce((acc, key) => {
      acc = acc + SYMBOLS[key];
      return acc;
    }, 0);
  },
};

export default Roman;
