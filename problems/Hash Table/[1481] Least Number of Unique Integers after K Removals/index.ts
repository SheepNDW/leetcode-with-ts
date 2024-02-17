function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const freq = new Map<number, number>();
  arr.forEach((num) => freq.set(num, (freq.get(num) ?? 0) + 1));

  const sorted = [...freq.values()].sort((a, b) => a - b);

  let removed = 0;
  for (let i = 0; i < sorted.length && k > 0; i++) {
    const count = sorted[i];
    if (k - count < 0) break;
    k -= count;
    removed++;
  }

  return freq.size - removed;
}

export { findLeastNumOfUniqueInts };
