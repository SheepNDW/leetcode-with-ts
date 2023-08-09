function search0(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let pivot = 0;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  pivot = left;

  if (target === nums[0]) return 0;

  // 如果未旋轉，或目標大於第一個元素
  if (pivot === 0 || target > nums[0]) {
    left = 0;
    right = pivot === 0 ? n - 1 : pivot - 1; // 如果未旋轉，尋找整個陣列
  } else {
    left = pivot;
    right = n - 1;
  }

  return binarySearch(nums, target, left, right);
}

function binarySearch(nums: number[], target: number, left: number, right: number) {
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// ==== One binary search solution ====
function search(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    // case 1: find target
    if (nums[mid] === target) return mid;

    // case 2: subarray on mid's left is sorted
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // case 3: subarray on mid's right is sorted
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

export { search };
