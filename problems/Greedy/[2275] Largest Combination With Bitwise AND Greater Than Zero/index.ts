function largestCombination(candidates: number[]): number {
  let res = 0;

  for (let i = 0; i < 24; i++) {
    let count = 0;

    for (const x of candidates) {
      if ((x >> i) & 1) {
        count++;
      }
    }

    res = Math.max(res, count);
  }

  return res;
}

export { largestCombination };
