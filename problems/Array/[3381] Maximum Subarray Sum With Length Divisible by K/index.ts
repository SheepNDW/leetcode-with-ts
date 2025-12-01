/*
  brute force TLE

  Time Complexity: O(n * n/k)
*/
function maxSubarraySum0(nums: number[], k: number): number {
  const n = nums.length;
  const prefix: number[] = [nums[0]];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  let res = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = i + k - 1; j < n; j += k) {
      const sum = prefix[j] - (prefix[i - 1] ?? 0);
      res = Math.max(res, sum);
    }
  }

  return res;
}

/*
  Optimized
*/
function maxSubarraySum(nums: number[], k: number): number {
  const n = nums.length;

  // minPrefix[r]: minimum prefix sum with length % k === r
  const minPrefix: number[] = Array(k).fill(Infinity);
  minPrefix[0] = 0;

  let presum = 0;
  let res = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    presum += nums[i];
    const r = (i + 1) % k;

    res = Math.max(res, presum - minPrefix[r]);
    minPrefix[r] = Math.min(minPrefix[r], presum);
  }

  return res;
}

export { maxSubarraySum };
