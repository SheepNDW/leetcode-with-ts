function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  // 如果起點就是障礙物，則無法開始
  if (obstacleGrid[0][0] === 1) return 0;

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;

  // 初始化縱向第一排
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1) break;
    dp[i][0] = 1;
  }

  // 初始化橫向第一排
  for (let j = 1; j < n; j++) {
    if (obstacleGrid[0][j] === 1) break;
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}

export { uniquePathsWithObstacles };
