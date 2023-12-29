// dp[i][k]; given an array s[0:i], minimize "the sum of each maximum of k subarray"
// init: dp[0][0], dp[*][*] = inf
// transition: dp[i][k] = min{dp[j-1][k-1] + max(jobs[j~i])}
//  k-1 days     1 day
// [1 ..... ], [j ... i]
function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  if (n < d) return -1;

  const dp = Array.from({ length: n + 1 }, () =>
    Array<number>(d + 1).fill(Number.MAX_SAFE_INTEGER)
  );
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= Math.min(d, i); k++) {
      let max = 0;
      for (let j = i; j >= k; j--) {
        max = Math.max(max, jobDifficulty[j - 1]);
        dp[i][k] = Math.min(dp[i][k], dp[j - 1][k - 1] + max);
      }
    }
  }

  return dp[n][d];
}

export { minDifficulty };
