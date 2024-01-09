function search0(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

// use template
function search(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left] === target ? left : -1;
}

export { search };
