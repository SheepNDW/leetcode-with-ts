/*
  non stable but passed
*/
function sortJumbled(mapping: number[], nums: number[]): number[] {
  const hash = new Map<number, number>();

  for (const num of nums) {
    let mapped = 0;
    for (const d of `${num}`) {
      mapped *= 10;
      mapped += mapping[+d];
    }
    hash.set(num, mapped);
  }

  nums.sort((a, b) => {
    return hash.get(a)! - hash.get(b)!;
  });

  return nums;
}

export { sortJumbled };
