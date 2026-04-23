function distance(nums: number[]): number[] {
  const n = nums.length;
  const map = new Map<number, number[]>();
  const res = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, []);
    }
    map.get(num)!.push(i);
  }

  for (const indices of map.values()) {
    const m = indices.length;
    let sum = 0;

    for (const idx of indices) {
      sum += Math.abs(idx - indices[0]);
    }

    res[indices[0]] = sum;

    for (let i = 1; i < m; i++) {
      const diff = indices[i] - indices[i - 1];
      sum += diff * i - diff * (m - i);
      res[indices[i]] = sum;
    }
  }

  return res;
}

export { distance };
