/**
 * Find the index of the first element in a sorted array that is greater than a given target.
 */
function upperBound(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const mid = (l + r) >> 1;
    if (nums[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
}

export { upperBound };
