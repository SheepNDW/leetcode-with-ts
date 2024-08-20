function stoneGameII(piles: number[]): number {
  const n = piles.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const suf = Array.from({ length: n + 1 }, () => 0);

  for (let i = n - 1; i >= 0; i--) {
    suf[i] = suf[i + 1] + piles[i];
  }

  function solve(i: number, m: number): number {
    if (i === n) return 0;
    if (dp[i][m] !== 0) {
      return dp[i][m];
    }

    let sum = 0;
    for (let x = 1; x <= 2 * m; x++) {
      if (i + x - 1 >= n) break;
      sum += piles[i + x - 1];
      dp[i][m] = Math.max(dp[i][m], sum + suf[i + x] - solve(i + x, Math.max(m, x)));
    }
    return dp[i][m];
  }

  return solve(0, 1);
}

export { stoneGameII };
