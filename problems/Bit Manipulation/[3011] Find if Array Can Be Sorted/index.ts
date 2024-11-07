function canSortArray(nums: number[]): boolean {
  let curMin = nums[0];
  let curMax = nums[0];
  let prevMax = Number.MIN_SAFE_INTEGER;

  for (const n of nums) {
    if (countSetBits(n) === countSetBits(curMin)) {
      curMin = Math.min(curMin, n);
      curMax = Math.max(curMax, n);
    } else {
      if (curMin < prevMax) {
        return false;
      }
      prevMax = curMax;
      curMin = n;
      curMax = n;
    }
  }

  return curMin > prevMax;
}

function countSetBits(n: number): number {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

export { canSortArray };
