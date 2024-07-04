/*
  sorting + greedy: O(n log n)
*/
function minDifference(nums: number[]): number {
  if (nums.length <= 4) return 0;
  nums.sort((a, b) => a - b);

  let res = Infinity;
  for (let l = 0; l < 4; l++) {
    const r = nums.length - 4 + l;
    res = Math.min(res, nums[r] - nums[l]);
  }

  return res;
}

export { minDifference };
