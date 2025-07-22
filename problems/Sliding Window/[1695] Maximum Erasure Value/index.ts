function maximumUniqueSubarray(nums: number[]): number {
  const n = nums.length;
  const seen = new Array(10001).fill(0);
  let res = 0;
  let cur = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    while (seen[nums[r]]) {
      cur -= nums[l];
      seen[nums[l]] = 0;
      l++;
    }
    cur += nums[r];
    seen[nums[r]] = 1;
    res = Math.max(res, cur);
  }

  return res;
}

export { maximumUniqueSubarray };
