/*
  recursion + memo (sometimes TLE)
*/
function findTargetSumWays0(nums: number[], target: number): number {
  const totalSum = nums.reduce((a, c) => a + c, 0);
  if (Math.abs(target) > totalSum) return 0;

  const memo: Record<string, number> = {};

  function helper(curSum: number, i: number) {
    if (i === nums.length) {
      return curSum === target ? 1 : 0;
    }

    const key = `${curSum}_${i}`;

    if (memo[key]) {
      return memo[key];
    }

    if (Math.abs(curSum) > totalSum) {
      return 0;
    }

    const add = helper(curSum + nums[i], i + 1);
    const substract = helper(curSum - nums[i], i + 1);

    memo[key] = add + substract;
    return memo[key];
  }

  return helper(0, 0);
}

/*
  X X X X X X i

  dp[i][s] = dp[i-1][s-nums[i]] + dp[i-1][s+nums[i]]
*/
function findTargetSumWays(nums: number[], target: number): number {
  const totalSum = nums.reduce((a, c) => a + c, 0);
  if (target > totalSum || target < -totalSum) return 0;

  const n = nums.length;
  nums.unshift(0);

  let dp: number[][] = Array.from({ length: n + 1 }, () => Array(2 * totalSum + 1).fill(0));
  const offset = totalSum;
  dp[0][offset] = 1;

  for (let i = 1; i <= n; i++) {
    for (let s = -totalSum; s <= totalSum; s++) {
      if (s - nums[i] <= totalSum && s - nums[i] >= -totalSum) {
        dp[i][s + offset] += dp[i - 1][s - nums[i] + offset];
      }
      if (s + nums[i] <= totalSum && s + nums[i] >= -totalSum) {
        dp[i][s + offset] += dp[i - 1][s + nums[i] + offset];
      }
    }
  }

  return dp[n][target + offset];
}

export { findTargetSumWays };
