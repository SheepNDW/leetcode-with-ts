/*
  dp[i]: nums[0:i], the largest subset ending with nums[i] (以 nums[i] 結尾的最大子集的大小)

  轉移方程則是基於比較 nums[i] 和 nums[j]（對於所有的 j < i）
  如果 nums[i] % nums[j] == 0 或 nums[j] % nums[i] == 0，那麼 dp[i] 可以從 dp[j] 轉移而來

  dp[i] = max(dp[i], dp[j] + 1)
*/
function largestDivisibleSubset(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const dp: number[] = new Array(n).fill(1);
  const prev: number[] = new Array(n).fill(-1);

  let maxIndex = 0; // 用於記錄達到最大子集大小的最後一個元素的索引

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        if (dp[i] === dp[j] + 1) {
          prev[i] = j;
        }
      }
    }

    // 更新最大子集大小的索引
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  const largestSubset: number[] = [];

  while (maxIndex >= 0) {
    largestSubset.push(nums[maxIndex]);
    maxIndex = prev[maxIndex];
  }

  return largestSubset;
}

export { largestDivisibleSubset };
