function longestSubarray(nums: number[]): number {
  const n = nums.length;
  let res = 0;
  let zeros = 0;
  let i = 0;

  for (let j = 0; j < n; j++) {
    if (nums[j] === 0) zeros++;
    while (zeros > 1) {
      if (nums[i] === 0) zeros--;
      i++;
    }
    res = Math.max(res, j - i + 1 - zeros);
  }

  return zeros > 0 ? res : res - 1;
}

export { longestSubarray };
