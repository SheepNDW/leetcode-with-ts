// Sliding Window
function minSubArrayLen(target: number, nums: number[]): number {
  let size = 0;
  let left = 0;
  let right = 0;
  let tempSum = 0;

  while (right < nums.length) {
    tempSum += nums[right];
    while (tempSum >= target) {
      const newSize = right - left + 1;
      size === 0 ? (size = newSize) : (size = Math.min(size, newSize));
      tempSum -= nums[left];
      left++;
    }
    right++;
  }

  return size;
}

export { minSubArrayLen };
