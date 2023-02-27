export function findDuplicate(nums: number[]): number {
  const map: number[] = [];
  for (let i = 0; i <= nums.length; i++) {
    if (map[nums[i]] != null) {
      return nums[i];
    }
    map[nums[i]] = i;
  }

  return 0;
}
