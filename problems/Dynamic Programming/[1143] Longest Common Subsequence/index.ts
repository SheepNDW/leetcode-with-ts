// brute force
function longestCommonSubsequence0(text1: string, text2: string): number {
  function findLCS(i: number, j: number): number {
    if (i < 0 || j < 0) return 0;

    if (text1[i] === text2[j]) {
      return 1 + findLCS(i - 1, j - 1);
    }

    return Math.max(findLCS(i - 1, j), findLCS(i, j - 1));
  }

  return findLCS(text1.length - 1, text2.length - 1);
}

// memoization
function longestCommonSubsequence1(text1: string, text2: string): number {
  const memo = Array.from({ length: text1.length }, () => Array(text2.length).fill(undefined));

  function findLCS(i: number, j: number): number {
    if (i < 0 || j < 0) return 0;

    if (memo[i][j] !== undefined) return memo[i][j];

    if (text1[i] === text2[j]) {
      memo[i][j] = 1 + findLCS(i - 1, j - 1);
    } else {
      memo[i][j] = Math.max(findLCS(i - 1, j), findLCS(i, j - 1));
    }

    return memo[i][j];
  }

  return findLCS(text1.length - 1, text2.length - 1);
}

/*
  dp[i][j]: the length of their longest common subsequence for text1[0:i], text2[0:j]
*/
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  text1 = '#' + text1;
  text2 = '#' + text2;
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

export { longestCommonSubsequence };
