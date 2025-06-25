/**
 * Find the first index in a sorted array where the value is not less than the target.
 */
function lowerBound(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const mid = (l + r) >> 1;
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
}

export { lowerBound };
