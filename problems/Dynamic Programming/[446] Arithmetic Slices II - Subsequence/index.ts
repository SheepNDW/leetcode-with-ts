/*
  dp[i][diff]: 以 nums[i] 結尾, 公差為 diff, 長度 >= 2 的等差數列個數

  [1, 3, 5, 7, 9, x, x]

  dp[3][2] = 3
  dp[4][2] = dp[3][2] + 1
  result += dp[3][2]
*/
function numberOfArithmeticSlices(nums: number[]): number {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => new Map<number, number>());
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const count = dp[j].get(diff) || 0;
      dp[i].set(diff, (dp[i].get(diff) || 0) + count + 1);

      if (count > 0) {
        result += count;
      }
    }
  }

  return result;
}

export { numberOfArithmeticSlices };
