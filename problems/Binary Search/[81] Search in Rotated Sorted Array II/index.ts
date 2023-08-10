function search(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) return true;

    if (nums[mid] === nums[left]) {
      left++;
      continue;
    }

    if (nums[mid] > nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        // 落在左側已排序區域
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        // 落在右側已排序區域
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}

export { search };
