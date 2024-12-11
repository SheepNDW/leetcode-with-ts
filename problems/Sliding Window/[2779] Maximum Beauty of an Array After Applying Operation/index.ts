function maximumBeauty(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let res = 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    while (nums[j] - nums[i] > 2 * k) {
      i++;
    }

    res = Math.max(res, j - i + 1);
  }

  return res;
}

export { maximumBeauty };
