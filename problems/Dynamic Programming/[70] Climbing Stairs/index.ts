function climbStairs0(n: number): number {
  // dp[i]: ways to climb i steps
  // dp[0] = 1, dp[1] = 1, dp[2] = 2, dp[3] = 3, dp[4] = 5
  // dp[i] = dp[i - 1] + dp[i - 2]
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// space optimized
function climbStairs(n: number): number {
  if (n === 1) return 1;

  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    const curr = a + b;
    a = b;
    b = curr;
  }

  return b;
}

export { climbStairs };
