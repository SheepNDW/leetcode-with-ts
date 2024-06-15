/*
  sorting (greedy)

  [1,1,2,2,3,7]
   1 2 2 2 3 7 : 1
   1 2 3 2 3 7 : 1
   1 2 3 4 3 7 : 2
   1 2 3 4 5 7 : 2
*/
function minIncrementForUnique0(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let moves = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      moves += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }

  return moves;
}

/*
  counting
  TC: O(n + max)
  SC: O(n + max)
*/
function minIncrementForUnique(nums: number[]): number {
  const n = nums.length;
  const max = Math.max(...nums);
  const counts: number[] = new Array(n + max).fill(0);

  for (const num of nums) {
    counts[num]++;
  }

  let moves = 0;

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > 1) {
      const dup = counts[i] - 1;
      counts[i + 1] += dup;
      counts[i] = 1;
      moves += dup;
    }
  }

  return moves;
}

export { minIncrementForUnique };
