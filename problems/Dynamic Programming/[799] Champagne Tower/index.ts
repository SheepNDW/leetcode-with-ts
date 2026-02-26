function champagneTower(poured: number, query_row: number, query_glass: number): number {
  const dp = Array.from({ length: query_row + 1 }, () => Array(query_row + 1).fill(0));
  dp[0][0] = poured;

  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[i][j] > 1) {
        dp[i + 1][j] += (dp[i][j] - 1) / 2;
        dp[i + 1][j + 1] += (dp[i][j] - 1) / 2;
      }
    }
  }

  return Math.min(1, dp[query_row][query_glass]);
}

export { champagneTower };
