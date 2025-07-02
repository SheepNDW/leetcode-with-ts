function findLHS(nums: number[]): number {
  const freq = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }

  let res = 0;

  for (const [key, count] of freq) {
    if (freq.has(key + 1)) {
      res = Math.max(res, count + freq.get(key + 1)!);
    }
  }

  return res;
}

export { findLHS };
