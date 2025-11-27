/*
  dp[i][j][r]: the number of distinct paths whose sum % k === r

  dp[i][j][r] = dp[i-1][j][t] + dp[i][j-1][t];
  (t + grid[i][j]) % k = r
*/
function numberOfPaths(grid: number[][], k: number): number {
  const MOD = 1e9 + 7;
  const m = grid.length;
  const n = grid[0].length;

  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => Array(k).fill(0)));

  let rem = 0;
  for (let i = 0; i < m; i++) {
    rem = (rem + grid[i][0]) % k;
    dp[i][0][rem] = 1;
  }

  rem = 0;
  for (let j = 0; j < n; j++) {
    rem = (rem + grid[0][j]) % k;
    dp[0][j][rem] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      for (let r = 0; r < k; r++) {
        const t = (((r - grid[i][j]) % k) + k) % k;
        dp[i][j][r] = (dp[i - 1][j][t] + dp[i][j - 1][t]) % MOD;
      }
    }
  }

  return dp[m - 1][n - 1][0];
}

export { numberOfPaths };
