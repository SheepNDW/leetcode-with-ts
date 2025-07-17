/*
  dp[i][r]: the maximum length of a valid subsequence from the first i elements with remainder r when divided by k.

  X X X X j X X i

  (nums[j] + nums[i]) % k === r
  -> d = (r - nums[i] % k + k) % k // d: nums[j] % k

  dp[i][r] = dp[j][r] + 1
*/
function maximumLength(nums: number[], k: number): number {
  const n = nums.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(k).fill(0));
  const lastIndex = new Array(k).fill(-1);
  let res = 0;

  for (let i = 0; i < n; i++) {
    for (let r = 0; r < k; r++) {
      const d = (r - (nums[i] % k) + k) % k;

      if (lastIndex[d] !== -1) {
        const j = lastIndex[d];
        dp[i][r] = dp[j][r] + 1;
      } else {
        dp[i][r] = 1;
      }

      res = Math.max(res, dp[i][r]);
    }
    lastIndex[nums[i] % k] = i;
  }

  return res;
}

export { maximumLength };
