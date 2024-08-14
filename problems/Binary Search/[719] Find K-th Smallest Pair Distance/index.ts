function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  let left = 0;
  let right = nums[n - 1] - nums[0] + 1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    let count = 0;
    for (let i = 0; i < n; i++) {
      const pos = upperBound(nums, nums[i] + mid);
      count += pos - i - 1;
    }

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function upperBound(nums: number[], target: number) {
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

export { smallestDistancePair };
