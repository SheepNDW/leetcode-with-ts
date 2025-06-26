function partitionArray(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let count = 1;

  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] - nums[i] > k) {
      count++;
      i = j;
    }
  }

  return count;
}

export { partitionArray };
