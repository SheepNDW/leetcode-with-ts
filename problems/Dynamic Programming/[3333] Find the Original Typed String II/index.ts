function possibleStringCount(word: string, k: number): number {
  const mod = 1e9 + 7;
  const n = word.length;
  const freq: number[] = [];
  let count = 1;

  for (let i = 1; i < n; i++) {
    if (word[i] === word[i - 1]) {
      count++;
    } else {
      freq.push(count);
      count = 1;
    }
  }
  freq.push(count);

  let total = 1;
  for (const f of freq) {
    total = (total * f) % mod;
  }

  if (freq.length >= k) {
    return total;
  }

  const m = freq.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(k).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= m; i++) {
    const preSum = Array(k + 1).fill(0);
    for (let j = 0; j < k; j++) {
      preSum[j + 1] = (preSum[j] + dp[i - 1][j]) % mod;
    }

    for (let j = 0; j < k; j++) {
      // 可以選 x = 1 ~ freq[i - 1]
      // 上一層可以湊出 j-1, j-2,...,j - freq[i-1]
      const l = Math.max(0, j - freq[i - 1]);
      const r = j;
      dp[i][j] = (preSum[r] - preSum[l] + mod) % mod;
    }
  }

  let less = 0;
  for (let j = 0; j < k; j++) {
    less = (less + dp[m][j]) % mod;
  }
  return (total - less + mod) % mod;
}

export { possibleStringCount };
