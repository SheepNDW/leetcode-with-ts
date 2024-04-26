/*
  dp[i]: longest subsequence ending at i

  [XXXXX j X j X X i] XXXX
         a   c     b

  j = prev['c']
  j = prev['a']

  dp[i] = max{dp[j]} + 1
*/
function longestIdealString0(s: string, k: number): number {
  const n = s.length;
  const A_CODE = 'a'.charCodeAt(0);
  const dp = Array.from({ length: n }, () => 1);
  const prev = Array.from({ length: 26 }, () => -1);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const curCode = s[i].charCodeAt(0);
    const min = Math.max(0, curCode - A_CODE - k);
    const max = Math.min(25, curCode - A_CODE + k);
    for (let ch = min; ch <= max; ch++) {
      const j = prev[ch];
      if (j !== -1) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    prev[curCode - A_CODE] = i;
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}

/*
  dp[ch] => longest subsequence ending at ch
  dp[ch] = max{dp[x:y]} + 1
*/
function longestIdealString(s: string, k: number): number {
  const n = s.length;
  const A_CODE = 'a'.charCodeAt(0);
  const dp = Array.from({ length: 26 }, () => 0);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const curCh = s[i].charCodeAt(0) - A_CODE;
    const min = Math.max(0, curCh - k);
    const max = Math.min(25, curCh + k);

    let curLen = 0;
    for (let ch = min; ch <= max; ch++) {
      curLen = Math.max(curLen, dp[ch] + 1);
    }
    dp[curCh] = curLen;
    ans = Math.max(ans, curLen);
  }

  return ans;
}

export { longestIdealString };
