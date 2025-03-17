function minCapability(nums: number[], k: number): number {
  let left = Math.min(...nums);
  let right = Math.max(...nums) + 1;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (canStealAtLeastK(mid, nums, k)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function canStealAtLeastK(cap: number, nums: number[], k: number): boolean {
  let count = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] <= cap) {
      count++;
      i++;
    }
    i++;
  }

  return count >= k;
}

export { minCapability };
