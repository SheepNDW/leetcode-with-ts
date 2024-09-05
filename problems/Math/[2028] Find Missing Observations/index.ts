function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const m = rolls.length;
  const totalSum = (m + n) * mean;
  const curSum = rolls.reduce((a, c) => a + c, 0);
  let remain = totalSum - curSum;

  if (remain < n || remain > 6 * n) return [];

  const res = Array.from({ length: n }, () => 1);
  remain -= n;

  for (let i = 0; i < n && remain > 0; i++) {
    const add = Math.min(5, remain); // 每個骰子最多加到 6 (1+5)
    res[i] += add;
    remain -= add;
  }

  return res;
}

export { missingRolls };
