function longestOnes(nums: number[], k: number): number {
  let result = 0;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      k--;
    }
    while (k < 0) {
      if (nums[left] === 0) {
        k++;
      }
      left++;
    }
    result = Math.max(result, right - left + 1);
  }

  return result;
}

export { longestOnes };
