function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let temp = 0;

  for (const num of nums) {
    if (num === 1) {
      temp++;
      maxCount = Math.max(maxCount, temp);
    } else {
      temp = 0;
    }
  }

  return maxCount;
}

export { findMaxConsecutiveOnes };
