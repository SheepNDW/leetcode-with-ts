/*
  dp[i][c]: the number of occurrences of character c after i transformations

  if c = 0: corresponds to 'a', it can be transformed from 'z'
  => dp[i][0] = dp[i - 1][25]

  if c = 1: corresponds to 'b', it can be transformed from 'a' and 'z'
  => dp[i][1] = dp[i - 1][0] + dp[i - 1][25]

  if c >= 2: it can come form the last character conversion
  => dp[i][c] = dp[i - 1][c - 1]
*/
function lengthAfterTransformations(s: string, t: number): number {
  const mod = 1e9 + 7;
  let dp = new Array(26).fill(0);

  for (const ch of s) {
    dp[ch.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < t; i++) {
    const nextDp = new Array(26).fill(0);
    nextDp[0] = dp[25];
    nextDp[1] = (dp[0] + dp[25]) % mod;
    for (let j = 2; j < 26; j++) {
      nextDp[j] = dp[j - 1];
    }
    dp = nextDp;
  }

  let res = 0;

  for (let i = 0; i < 26; i++) {
    res = (res + dp[i]) % mod;
  }

  return res;
}

export { lengthAfterTransformations };
