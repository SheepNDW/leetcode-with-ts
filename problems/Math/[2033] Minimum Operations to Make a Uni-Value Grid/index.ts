function minOperations(grid: number[][], x: number): number {
  const nums = grid.flat().sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];

  let count = 0;

  for (const num of nums) {
    if (Math.abs(median - num) % x !== 0) {
      return -1;
    }
    count += Math.abs(median - num) / x;
  }

  return count;
}

export { minOperations };
