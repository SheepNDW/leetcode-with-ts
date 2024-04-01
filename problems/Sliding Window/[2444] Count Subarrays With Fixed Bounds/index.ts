function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let boundary = -1;
  let prevMin = -1;
  let prevMax = -1;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      boundary = i;
      continue;
    }

    if (nums[i] === minK) prevMin = i;
    if (nums[i] === maxK) prevMax = i;

    result += Math.max(0, Math.min(prevMax, prevMin) - boundary);
  }

  return result;
}

export { countSubarrays };
