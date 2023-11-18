function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let maxSum = 0;

  while (left < right) {
    const currSum = nums[left++] + nums[right--];
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

function minPairSum1(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let maxSum = 0;

  for (let i = 0; i < n / 2; i++) {
    maxSum = Math.max(maxSum, nums[i] + nums[n - 1 - i]);
  }

  return maxSum;
}

export { minPairSum };
