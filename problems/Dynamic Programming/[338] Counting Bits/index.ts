function countBits(n: number): number[] {
  const dp: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
}

export { countBits };
