function maxSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;
  const map = new Map<number, number>();
  let maxLen = 0;
  let i = 0;

  for (let j = 0; j < n; j++) {
    map.set(nums[j], (map.get(nums[j]) || 0) + 1);

    while (map.get(nums[j])! > k) {
      map.set(nums[i], map.get(nums[i])! - 1);
      i++;
    }

    maxLen = Math.max(maxLen, j - i + 1);
  }

  return maxLen;
}

export { maxSubarrayLength };
