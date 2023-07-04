// Using Hash Table
function singleNumber(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const map = new Map<number, number>();

  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      const count = map.get(num)!;
      const newCount = count + 1;
      newCount === 3 ? map.delete(num) : map.set(num, newCount);
    }
  });

  return [...map.keys()][0];
}

export { singleNumber };
