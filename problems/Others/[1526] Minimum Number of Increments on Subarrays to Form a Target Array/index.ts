/*
  Greedy
*/
function minNumberOperations(target: number[]): number {
  const n = target.length;
  let res = target[0];

  for (let i = 1; i < n; i++) {
    if (target[i] > target[i - 1]) {
      res += target[i] - target[i - 1];
    }
  }

  return res;
}

export { minNumberOperations };
