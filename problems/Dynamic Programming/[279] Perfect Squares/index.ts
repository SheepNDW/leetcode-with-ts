/*
  dp[i]: the least number of perfect square numbers that sum to i.

  dp[n] = min {dp[n-x^2]} for all x
*/
function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i * i <= n; i++) {
    dp[i * i] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (dp[i] !== Infinity) continue;

    for (let x = 1; x * x <= i; x++) {
      dp[i] = Math.min(dp[i], dp[i - x * x] + 1);
    }
  }

  return dp[n];
}

export { numSquares };
