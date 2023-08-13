function validPartition(nums: number[]): boolean {
  const n = nums.length;
  const dp: boolean[] = new Array(n + 1).fill(false);
  dp[0] = true; // 起始狀態

  for (let i = 0; i < n; i++) {
    if (!dp[i]) continue; // 如果當前索引不可達，則跳過

    // 檢查相同元素的子區段
    if (i < n - 1 && nums[i] === nums[i + 1]) {
      dp[i + 2] = true;
      if (i < n - 2 && nums[i] === nums[i + 2]) {
        dp[i + 3] = true;
      }
    }

    // 檢查遞增子區段
    if (i < n - 2 && nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
      dp[i + 3] = true;
    }
  }

  return dp[n];
}

export { validPartition };
