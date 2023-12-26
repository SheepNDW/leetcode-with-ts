/**
 * sub / state (i, t)
 *
 * `dp[i][t]`: ways to have target sum using first i dices
 */

// recursive + memo
function numRollsToTarget0(n: number, k: number, target: number): number {
  const MOD = 1e9 + 7;
  const memo: Record<string, number> = {};

  const dp = (i: number, t: number) => {
    if (i === 0) return t === 0 ? 1 : 0;
    if (t > i * k || t < i) return 0;

    const key = `${i}-${t}`;
    if (memo[key] !== undefined) return memo[key];

    let ans = 0;
    for (let num = 1; num <= Math.min(k, t); num++) {
      ans = (ans + dp(i - 1, t - num)) % MOD;
    }

    memo[key] = ans;
    return ans;
  };

  return dp(n, target);
}

// bottom-up
function numRollsToTarget(n: number, k: number, target: number): number {
  const MOD = 1e9 + 7;

  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      for (let t = j; t <= target; t++) {
        dp[i][t] = (dp[i][t] + dp[i - 1][t - j]) % MOD;
      }
    }
  }

  return dp[n][target];
}

export { numRollsToTarget };
