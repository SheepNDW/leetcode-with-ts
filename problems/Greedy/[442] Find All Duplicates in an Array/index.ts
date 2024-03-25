/*
  hash
*/
function findDuplicates0(nums: number[]): number[] {
  const hash = new Set<number>();
  const dup: number[] = [];

  for (const num of nums) {
    if (hash.has(num)) dup.push(num);
    hash.add(num);
  }

  return dup;
}

/*
  indexing sort

  [4,3,2,7,8,2,3,1]

   1 2 3 4 5 6 7 8
  [1,2,3,4,3,2,7,8]
*/
function findDuplicates1(nums: number[]): number[] {
  const n = nums.length;
  nums.unshift(0);

  for (let i = 1; i <= n; i++) {
    while (nums[i] !== i && nums[i] <= n && nums[i] !== nums[nums[i]]) {
      const temp = nums[nums[i]];
      nums[nums[i]] = nums[i];
      nums[i] = temp;
    }
  }

  const dup: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (nums[i] !== i) {
      dup.push(nums[i]);
    }
  }

  return dup;
}

/*
  取負數
*/
function findDuplicates(nums: number[]): number[] {
  const n = nums.length;
  const dup: number[] = [];

  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num - 1] < 0) {
      dup.push(num);
    } else {
      nums[num - 1] *= -1;
    }
  }

  return dup;
}

export { findDuplicates };
