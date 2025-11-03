function minCost(colors: string, neededTime: number[]): number {
  const n = colors.length;
  let res = 0;

  let prev = 0;
  for (let i = 1; i < n; i++) {
    if (colors[i] === colors[prev]) {
      if (neededTime[i] >= neededTime[prev]) {
        res += neededTime[prev];
        prev = i;
      } else {
        res += neededTime[i];
      }
    } else {
      prev = i;
    }
  }

  return res;
}

export { minCost };
