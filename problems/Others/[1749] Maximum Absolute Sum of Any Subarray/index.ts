/*
  subarray sum of [i+1, j] = presum[j] - presum[i]
  abs(subarray sum of [i+1, j]) = presum[j] - presum[i] or presum[i] - presum[j]
*/
function maxAbsoluteSum0(nums: number[]): number {
  let preMax = 0;
  let preMin = 0;
  let presum = 0;

  for (const num of nums) {
    presum += num;
    preMax = Math.max(presum, preMax);
    preMin = Math.min(presum, preMin);
  }

  return preMax - preMin;
}

/*
  Kadane's Algorithm

  dp[i]: the maximum sum of subarray that ends with nums[i]
  X [X X X i-1 i] X X
  dp[i] = max(nums[i], dp[i-1] + nums[i])
*/
function maxAbsoluteSum(nums: number[]): number {
  let curMax = 0;
  let curMin = 0;
  let res = 0;

  for (const num of nums) {
    curMax = Math.max(num, curMax + num);
    curMin = Math.min(num, curMin + num);
    res = Math.max(res, Math.abs(curMax));
    res = Math.max(res, Math.abs(curMin));
  }

  return res;
}

export { maxAbsoluteSum };
