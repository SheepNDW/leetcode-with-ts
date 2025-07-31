function longestSubarray(nums: number[]): number {
  const n = nums.length;
  const max = Math.max(...nums);

  let res = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === max) {
      count++;
      res = Math.max(res, count);
    } else {
      count = 0;
    }
  }

  return res;
}

export { longestSubarray };
