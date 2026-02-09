function minRemoval(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let len = 0;

  let i = 0;
  for (let j = 0; j < n; j++) {
    while (i < j && nums[j] > nums[i] * k) {
      i++;
    }
    len = Math.max(len, j - i + 1);
  }

  return n - len;
}

export { minRemoval };
