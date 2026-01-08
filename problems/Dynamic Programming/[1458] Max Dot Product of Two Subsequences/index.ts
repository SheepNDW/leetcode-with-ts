/*
  X X X X i
  Y Y Y j

  dp[i][j]: max dot product using nums1[0:i] and nums2[0:j] with same length subsequences

  1. pair A[i] * B[j] => dp[i][j] = max(0, dp[i-1][j-1]) + A[i] * B[j]
  2. skip A[i] or skip B[j] => dp[i][j] = max(dp[i][j-1], dp[i-1][j])
*/
function maxDotProduct(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => Number.NEGATIVE_INFINITY)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const product = nums1[i - 1] * nums2[j - 1]; // nums1 and nums2 are 0-indexed
      dp[i][j] = Math.max(0, dp[i - 1][j - 1]) + product;
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m][n];
}

export { maxDotProduct };
