/*
  brute force
*/
function lenLongestFibSubseq0(arr: number[]): number {
  const n = arr.length;
  const set = new Set(arr);
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let prev = arr[i];
      let curr = arr[j];
      let next = prev + curr;
      let length = 2;

      while (set.has(next)) {
        length += 1;
        prev = curr;
        curr = next;
        next = prev + curr;
      }

      maxLen = Math.max(maxLen, length);
    }
  }

  return maxLen >= 3 ? maxLen : 0;
}

/*
  DP + hash

  X X X k X j X X i

  dp[j][i] = max(2, dp[k][j] + 1)
*/
function lenLongestFibSubseq(arr: number[]): number {
  const n = arr.length;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(2));

  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    map.set(arr[i], i);
  }

  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const k = map.get(arr[i] - arr[j]);

      if (k !== undefined && k < j) {
        dp[j][i] = dp[k][j] + 1;
      }

      maxLen = Math.max(maxLen, dp[j][i]);
    }
  }

  return maxLen >= 3 ? maxLen : 0;
}

export { lenLongestFibSubseq };
