function countGood(nums: number[], k: number): number {
  const n = nums.length;
  const map = new Map<number, number>();
  let count = 0;
  let pairs = 0;

  let i = 0;
  for (let j = 0; j < n; j++) {
    if (map.has(nums[j])) {
      count += map.get(nums[j])!;
    }
    map.set(nums[j], (map.get(nums[j]) || 0) + 1);

    while (i < n && count >= k) {
      pairs += n - j;
      let freq = map.get(nums[i])!;
      map.set(nums[i], freq - 1);
      count -= freq - 1;
      i++;
    }
  }

  return pairs;
}

export { countGood };
