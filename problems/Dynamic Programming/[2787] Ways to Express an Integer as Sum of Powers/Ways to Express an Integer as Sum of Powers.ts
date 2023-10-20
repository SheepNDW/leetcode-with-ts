function numberOfWays(n: number, x: number): number {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i ** x <= n; i++) {
    const pow = i ** x;

    for (let j = n; j >= pow; j--) {
      dp[j] += dp[j - pow];
      dp[j] %= MOD;
    }
  }

  return dp[n];
}

export { numberOfWays };
