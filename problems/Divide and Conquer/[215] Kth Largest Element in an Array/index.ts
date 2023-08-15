// ==== quick select ====
/**
 * 思路：
 * partition 函式會回傳一個 pivot，這個 pivot 左邊的元素都比 pivot 大，右邊的元素都比 pivot 小
 * 不斷呼叫 partition 然後每次檢查 pivot 的位置是否為 k - 1，如果是的話就回傳 pivot 的值
 */

function partition(arr: number[], left: number, right: number) {
  const pivot = arr[right];
  while (left < right) {
    while (left < right && arr[left] >= pivot) {
      left++;
    }
    arr[right] = arr[left];
    while (left < right && arr[right] <= pivot) {
      right--;
    }
    arr[left] = arr[right];
  }
  arr[right] = pivot;
  return left;
}

function findKthLargest0(nums: number[], k: number): number {
  let low = 0;
  let high = nums.length - 1;
  let pivot = partition(nums, low, high);

  while (pivot !== k - 1) {
    if (pivot > k - 1) {
      high = pivot - 1;
      pivot = partition(nums, low, high);
    } else {
      low = pivot + 1;
      pivot = partition(nums, low, high);
    }
  }

  return nums[pivot];
}

// ==== counting sort ====
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;
  let max = nums[0];
  let min = nums[0];

  for (const num of nums) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }

  const size = max - min + 1;
  const buckets = new Array(size).fill(0);
  for (let i = 0; i < n; i++) {
    buckets[nums[i] - min]++;
  }

  let remain = k;
  for (let i = size - 1; i >= 0; i--) {
    remain -= buckets[i];
    if (remain <= 0) {
      return i + min;
    }
  }

  return -1;
}

export { findKthLargest };
