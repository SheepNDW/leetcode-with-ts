function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;

    const target = -nums[i];
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const twoSum = nums[left] + nums[right];

      if (twoSum < target) {
        left++;
      } else if (twoSum > target) {
        right--;
      } else {
        result.push([nums[i], nums[left++], nums[right--]]);

        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
}

export { threeSum };
