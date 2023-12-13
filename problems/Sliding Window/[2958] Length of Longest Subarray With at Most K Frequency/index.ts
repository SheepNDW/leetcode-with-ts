function maxSubarrayLength(nums: number[], k: number): number {
  const freqMap = new Map<number, number>();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    const currNum = nums[right];
    freqMap.set(currNum, (freqMap.get(currNum) || 0) + 1);

    while (freqMap.get(currNum)! > k) {
      const currLeft = nums[left];
      freqMap.set(currLeft, freqMap.get(currLeft)! - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

export { maxSubarrayLength };
