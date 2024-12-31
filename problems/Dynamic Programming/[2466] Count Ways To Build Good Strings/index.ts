/*
  dp[i]: 表示能構造長度為 i 的字串數量
  dp[i] = dp[i - zero] + dp[i - one] (i >= zero, i >= one)
*/
function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  const mod = 1e9 + 7;
  const dp = Array.from({ length: high + 1 }, () => 0);
  dp[0] = 1;

  for (let i = 1; i <= high; i++) {
    if (i - zero >= 0) dp[i] = (dp[i] + dp[i - zero]) % mod;
    if (i - one >= 0) dp[i] = (dp[i] + dp[i - one]) % mod;
  }

  let result = 0;
  for (let i = low; i <= high; i++) {
    result = (result + dp[i]) % mod;
  }

  return result;
}

export { countGoodStrings };
