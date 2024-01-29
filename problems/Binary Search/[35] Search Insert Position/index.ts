function searchInsert(nums: number[], target: number): number {
  const n = nums.length;

  if (nums[n - 1] < target) return n;

  let left = 0;
  let right = n - 1;
  while (left < right) {
    const mid = left + ((right - left) >> 1);

    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

export { searchInsert };
