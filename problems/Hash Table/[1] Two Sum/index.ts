function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    const complement = target - el;
    const index = map.get(complement);
    if (index !== undefined) {
      return [index, i];
    }
    map.set(el, i);
  }

  return [];
}

export { twoSum };
