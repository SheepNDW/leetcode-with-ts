// dp[i] = max(dp[i - 2] + curr, dp[i - 1]);
function rob0(nums: number[]): number {
  const n = nums.length;
  const dp: number[] = new Array(n + 1).fill(0);
  dp[1] = nums[0];

  for (let i = 2; i <= n; i++) {
    const curr = nums[i - 1];
    dp[i] = Math.max(dp[i - 2] + curr, dp[i - 1]);
  }

  return dp[n];
}

// SC: O(1)
// rob[k] = noRob[k - 1] + num[k]
// noRob[k] = max(rob[k-1], noRob[k-1])
function rob(nums: number[]): number {
  if (nums.length === 0) return 0;

  const n = nums.length;
  let rob = nums[0];
  let noRob = 0;

  for (let i = 1; i < n; i++) {
    let tempRob = rob;
    let tempNoRob = noRob;

    noRob = Math.max(tempRob, tempNoRob);
    rob = tempNoRob + nums[i];
  }

  return Math.max(rob, noRob);
}

export { rob };
