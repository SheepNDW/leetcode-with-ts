/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (mid <= right) {
    if (nums[mid] === 2) {
      swap(nums, right, mid);
      right--;
    } else if (nums[mid] === 0) {
      swap(nums, left, mid);
      left++;
      mid++;
    } else {
      mid++;
    }
  }
}

function swap(arr: unknown[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export { sortColors };
