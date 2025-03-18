function longestNiceSubarray(nums: number[]): number {
  const n = nums.length;
  let res = 0;
  let count = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    while (j < n && (count & nums[j]) === 0) {
      count += nums[j];
      j++;
    }

    res = Math.max(res, j - i);
    count -= nums[i];
  }

  return res;
}

export { longestNiceSubarray };
