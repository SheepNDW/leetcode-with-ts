function checkValidString(s: string): boolean {
  let countMax = 0; // max # of unmatched left parenthes, try to use * as ( if possible
  let countMin = 0; // min # of unmatched left parenthes, try to use * as ) if possible

  for (const c of s) {
    if (c === '(') {
      countMax++;
      countMin++;
    } else if (c === ')') {
      countMax--;
      countMin--;
    } else {
      countMax++;
      countMin--;
    }

    if (countMax < 0) {
      return false;
    }
    if (countMin < 0) {
      countMin = 0;
    }
  }

  // [countMin, countMax] >= 0
  return countMin === 0;
}

export { checkValidString };
