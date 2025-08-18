/*
  TLE
*/
function new21Game0(n: number, k: number, maxPts: number): number {
  if (k === 0 || n >= k - 1 + maxPts) return 1;
  const memo = new Array(10001 + maxPts).fill(-1);

  const dfs = (points: number): number => {
    if (memo[points] !== -1) return memo[points];
    if (points >= k) return (memo[points] = points <= n ? 1 : 0);

    let prob = 0;

    for (let i = 1; i <= maxPts; i++) {
      prob += dfs(points + i);
    }

    memo[points] = prob / maxPts;
    return memo[points];
  };

  return dfs(0);
}

/*
  DP + sliding window

  dp[i]: start at i point -> probability of winning
*/
function new21Game(n: number, k: number, maxPts: number): number {
  if (k === 0) return 1;

  let windowSum = 0;

  for (let i = k; i < k + maxPts; i++) {
    windowSum += i <= n ? 1 : 0;
  }

  const dp = new Array(k + maxPts).fill(-1);

  for (let i = k - 1; i >= 0; i--) {
    dp[i] = windowSum / maxPts;

    let remove = 0;
    if (i + maxPts <= n) {
      remove = dp[i + maxPts] === -1 ? 1 : dp[i + maxPts];
    }

    windowSum += dp[i];
    windowSum -= remove;
  }

  return dp[0];
}

export { new21Game };
