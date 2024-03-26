/*
  Hash Table (SC: O(n))
*/
function findDuplicate0(nums: number[]): number {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }

  return -1;
}

/*
  Indexing sort
*/
function findDuplicate1(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] !== i + 1 && nums[i] <= n + 1 && nums[i] !== nums[nums[i]]) {
      const temp = nums[nums[i]];
      nums[nums[i]] = nums[i];
      nums[i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return nums[i];
  }

  return -1;
}

/*
  Two Pointer
*/
function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }

  fast = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

export { findDuplicate };
