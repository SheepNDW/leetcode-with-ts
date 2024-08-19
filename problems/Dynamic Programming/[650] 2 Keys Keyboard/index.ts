/*
  dp[i]: the minimum number of operations to get the character 'A' exactly i times

  6
  AAA AAA : AAA + 2
  AA AA AA: AA + 3
  A A A A A A : A + 6
*/
function minSteps(n: number): number {
  const dp = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j !== 0) continue;

      const k = i / j;
      dp[i] = Math.min(dp[i], dp[k] + 1 + j - 1); // +1 copy and paste j-1 times
      break;
    }
  }

  return dp[n];
}

export { minSteps };
