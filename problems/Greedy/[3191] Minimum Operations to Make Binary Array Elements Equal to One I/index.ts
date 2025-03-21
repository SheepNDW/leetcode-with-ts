function minOperations(nums: number[]): number {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i <= n - 3; i++) {
    if (nums[i] === 0) {
      nums[i] = 1;
      nums[i + 1] ^= 1;
      nums[i + 2] ^= 1;
      count++;
    }
  }

  if (nums[n - 1] === 0 || nums[n - 2] === 0) {
    return -1;
  }

  return count;
}

export { minOperations };
