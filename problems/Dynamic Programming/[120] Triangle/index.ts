/*
  dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j]
*/
function minimumTotal0(triangle: number[][]): number {
  const m = triangle.length;
  const dp = new Array(m).fill(Infinity);
  dp[0] = triangle[0][0];

  for (let i = 1; i < m; i++) {
    // 右到左，避免覆蓋
    for (let j = i; j >= 0; j--) {
      if (j === 0) {
        dp[0] = dp[0] + triangle[i][0];
      } else if (j === i) {
        dp[j] = dp[j - 1] + triangle[i][j];
      } else {
        dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j];
      }
    }
  }

  return Math.min(...dp);
}

/*
  bottom up
*/
function minimumTotal(triangle: number[][]): number {
  const m = triangle.length;
  const dp = [...triangle[m - 1]];

  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }

  return dp[0];
}

export { minimumTotal };
