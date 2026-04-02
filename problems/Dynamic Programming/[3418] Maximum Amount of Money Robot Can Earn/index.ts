/*
  dp[i][j][k]: the maximum amount of money the robot can earn when it is at position (i, j) and has already used k times the special ability

  at cell (i, j):
  if do not neutralize, + coins[i][j]
  if neutralize, + 0, but k + 1
*/
function maximumAmount(coins: number[][]): number {
  const m = coins.length;
  const n = coins[0].length;

  const dp: number[][][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(3).fill(-Infinity)),
  );
  dp[0][0][0] = coins[0][0];
  for (let k = 1; k <= 2; k++) {
    dp[0][0][k] = Math.max(coins[0][0], 0);
  }

  for (let j = 1; j < n; j++) {
    dp[0][j][0] = dp[0][j - 1][0] + coins[0][j];

    for (let k = 1; k <= 2; k++) {
      dp[0][j][k] = Math.max(
        dp[0][j - 1][k] + coins[0][j],
        dp[0][j - 1][k - 1] + Math.max(coins[0][j], 0),
      );
    }
  }

  for (let i = 1; i < m; i++) {
    dp[i][0][0] = dp[i - 1][0][0] + coins[i][0];

    for (let k = 1; k <= 2; k++) {
      dp[i][0][k] = Math.max(
        dp[i - 1][0][k] + coins[i][0],
        dp[i - 1][0][k - 1] + Math.max(coins[i][0], 0),
      );
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i][j - 1][0]) + coins[i][j];

      for (let k = 1; k <= 2; k++) {
        dp[i][j][k] = Math.max(
          Math.max(dp[i - 1][j][k], dp[i][j - 1][k]) + coins[i][j],
          Math.max(dp[i - 1][j][k - 1], dp[i][j - 1][k - 1]),
        );
      }
    }
  }

  return dp[m - 1][n - 1][2];
}

export { maximumAmount };
