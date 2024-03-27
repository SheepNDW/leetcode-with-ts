/*
  Indexing sort
  [1,2,3,4,k, ...]

  [2,4,1,5,2]
   4 2 1 5 2
   5 2 1 4 2
   2 2 1 4 5
   1 2 2 4 5
*/
function firstMissingPositive(nums: number[]): number {
  nums.unshift(0);
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] !== i && nums[i] < n && nums[i] > 0 && nums[i] !== nums[nums[i]]) {
      swap(nums, i, nums[i]);
    }
  }

  for (let i = 1; i < n; i++) {
    if (nums[i] !== i) return i;
  }

  return n;
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export { firstMissingPositive };
