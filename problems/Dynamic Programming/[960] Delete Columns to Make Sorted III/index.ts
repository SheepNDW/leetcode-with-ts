function minDeletionSize(strs: string[]): number {
  const n = strs[0].length;
  // dp[i]: the length of the LIS ending with the i-th column
  const dp = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    // update dp[i]
    for (let j = 0; j < i; j++) {
      if (canAppend(strs, j, i)) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let lis = 0;
  for (let i = 0; i < n; i++) {
    lis = Math.max(lis, dp[i]);
  }

  return n - lis;
}

function canAppend(strs: string[], x: number, y: number): boolean {
  for (const str of strs) {
    if (str.charCodeAt(x) > str.charCodeAt(y)) {
      return false;
    }
  }
  return true;
}

export { minDeletionSize };
