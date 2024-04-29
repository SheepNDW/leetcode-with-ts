/*
  dp[i][j] = min/min2 { dp[i-1][k] (k=0,1,2,...,n-1) } + grid[i][j]
*/
function minFallingPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    dp[0][j] = grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    const temp: number[][] = [];
    for (let k = 0; k < n; k++) {
      temp.push([dp[i - 1][k], k]);
    }
    temp.sort((a, b) => a[0] - b[0]);

    for (let j = 0; j < n; j++) {
      if (j !== temp[0][1]) {
        dp[i][j] = temp[0][0] + grid[i][j];
      } else {
        dp[i][j] = temp[1][0] + grid[i][j];
      }
    }
  }

  return Math.min(...dp[m - 1]);
}

export { minFallingPathSum };
