/*
  dp[i] = the largest sum of the given array `arr[0:i]` after partitioning (k)

  {X X X X X} [j X i]
    dp[j-1]    dp[i]

  dp[i] = max{dp[j-1] + MAX*(i-j+1)} for j = i, i-1,..., i-k+1
*/
function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const dp: number[] = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    // update dp[i]
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = i; j >= Math.max(i - k + 1, 0); j--) {
      max = Math.max(max, arr[j]);
      if (j >= 1) {
        dp[i] = Math.max(dp[i], dp[j - 1] + max * (i - j + 1));
      } else {
        dp[i] = Math.max(dp[i], max * (i - j + 1));
      }
    }
  }

  return dp[n - 1];
}

export { maxSumAfterPartitioning };
