function maxScoreSightseeingPair(values: number[]): number {
  const n = values.length;
  let res = 0;
  let curMax = values[0] - 1;

  for (let i = 1; i < n; i++) {
    res = Math.max(res, values[i] + curMax);
    curMax = Math.max(curMax - 1, values[i] - 1);
  }

  return res;
}

export { maxScoreSightseeingPair };
