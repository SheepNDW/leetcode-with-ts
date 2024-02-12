/*
  dp[i][j]: for a given row, the maximum number of cherries collection using both robots at `i` and `j` col

  dp[r][i][j] = max{dp[r-1][a][b] + grid[r][i] + grid[r][j]}
*/
function cherryPickup(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(Number.MIN_SAFE_INTEGER));
  dp[0][n - 1] = grid[0][0] + grid[0][n - 1];

  for (let r = 1; r < m; r++) {
    const prevRow = dp.map((row) => [...row]);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let a = i - 1; a <= i + 1; a++) {
          for (let b = j - 1; b <= j + 1; b++) {
            if (a < 0 || a >= n || b < 0 || b >= n) continue;
            if (i == j) {
              dp[i][j] = Math.max(dp[i][j], prevRow[a][b] + grid[r][i]);
            } else {
              dp[i][j] = Math.max(dp[i][j], prevRow[a][b] + grid[r][i] + grid[r][j]);
            }
          }
        }
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dp[i][j]);
    }
  }
  return ans;
}

export { cherryPickup };
