function minimumReplacement(nums: number[]): number {
  const n = nums.length;
  let count = 0;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      const numElements = Math.floor((nums[i] + nums[i + 1] - 1) / nums[i + 1]);
      count += numElements - 1;
      nums[i] = Math.floor(nums[i] / numElements);
    }
  }

  return count;
}

export { minimumReplacement };
