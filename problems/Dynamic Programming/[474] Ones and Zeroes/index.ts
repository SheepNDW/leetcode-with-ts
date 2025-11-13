/*
  dp[i][j] for any i,j
*/
function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let k = 0; k < strs.length; k++) {
    let ones = 0;
    let zeros = 0;

    for (const s of strs[k]) {
      if (s === '1') ones++;
      else zeros++;
    }

    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }

  return dp[m][n];
}

export { findMaxForm };
