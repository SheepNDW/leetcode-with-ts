function minSwaps(nums: number[]): number {
  const n = nums.length;
  const totalOnes = nums.reduce((a, c) => a + c, 0);

  let l = 0;
  let windowOnes = 0;
  let maxWindowOnes = 0;

  for (let r = 0; r < 2 * n; r++) {
    if (nums[r % n] === 1) {
      windowOnes++;
    }

    if (r - l + 1 > totalOnes) {
      windowOnes -= nums[l % n];
      l++;
    }

    maxWindowOnes = Math.max(maxWindowOnes, windowOnes);
  }

  return totalOnes - maxWindowOnes;
}

export { minSwaps };
