function maxMoves(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  for (let j = n - 2; j >= 0; j--) {
    for (let i = 0; i < m; i++) {
      const cur = grid[i][j];

      if (i > 0 && grid[i - 1][j + 1] > cur) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j + 1] + 1);
      }

      if (grid[i][j + 1] > cur) {
        dp[i][j] = Math.max(dp[i][j], dp[i][j + 1] + 1);
      }

      if (i < m - 1 && grid[i + 1][j + 1] > cur) {
        dp[i][j] = Math.max(dp[i][j], dp[i + 1][j + 1] + 1);
      }
    }
  }

  let maxSteps = 0;

  for (let i = 0; i < m; i++) {
    maxSteps = Math.max(maxSteps, dp[i][0]);
  }

  return maxSteps;
}

export { maxMoves };
