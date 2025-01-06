/*
  [X X X X X i X X n-1]
  left: presum[i]
  right: presum[n-1] - presum[i]
*/
function waysToSplitArray(nums: number[]): number {
  const n = nums.length;
  const presum = Array.from({ length: n }, () => 0);
  presum[0] = nums[0];

  for (let i = 1; i < n; i++) {
    presum[i] = presum[i - 1] + nums[i];
  }

  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    const leftSum = presum[i];
    const rightSum = presum[n - 1] - leftSum;

    if (leftSum >= rightSum) {
      count++;
    }
  }

  return count;
}

export { waysToSplitArray };
