function minOperations(nums: number[]): number {
  const map = new Map<number, number>();
  nums.forEach((num) => map.set(num, (map.get(num) ?? 0) + 1));

  let count = 0;

  for (const value of map.values()) {
    if (value < 2) return -1;

    // if (value % 3 !== 0) {
    //   count += ~~(value / 3) + 1;
    // } else {
    //   count += value / 3;
    // }
    count += Math.ceil(value / 3);
  }

  return count;
}

export { minOperations };
