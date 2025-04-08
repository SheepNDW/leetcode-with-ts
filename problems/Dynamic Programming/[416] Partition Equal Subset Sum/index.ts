/*
  X X X X X X X i
  dp[i][s]: from the first i element. if there is a method to pick some numbers whose sum equals s

  I.  dp[i-1][s] === true -> dp[i][s] = true
  II. dp[i-1][s-nums[i]] === true -> dp[i][s] = true

  dp[i][s] = dp[i-1][s] || (s >= nums[i] && dp[i-1][s-nums[i]])

  return dp[n-1][sum/2]
*/
function canPartition0(nums: number[]): boolean {
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 !== 0) return false;

  const n = nums.length;
  nums.unshift(0);
  const dp: boolean[][] = Array.from({ length: n + 1 }, () => Array(sum / 2 + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= n; i++) {
    for (let s = 0; s <= sum / 2; s++) {
      dp[i][s] = dp[i - 1][s] || (s >= nums[i] && dp[i - 1][s - nums[i]]);
    }
  }

  return dp[n][sum / 2];
}

function canPartition1(nums: number[]): boolean {
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 !== 0) return false;

  const n = nums.length;
  nums.unshift(0);
  const dp: boolean[][] = Array.from({ length: n + 1 }, () => Array(sum / 2 + 1).fill(false));
  dp[0][0] = true;

  for (let i = 0; i < n; i++) {
    for (let s = 0; s <= sum / 2; s++) {
      if (dp[i][s]) {
        dp[i + 1][s] = true;
        dp[i + 1][s + nums[i + 1]] = true;
      }
    }
  }

  return dp[n][sum / 2];
}

/*
  1D dp
  dp[s]: if there is a method to pick some numbers whose sum equals s

  I. do not pick nums[i]: dp[s] = dp[s]
  II. pick nums[i]: dp[s] = (s >= nums[i] && dp[s-nums[i]])

  dp[s] = dp[s] || dp[s-nums[i]]
*/
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 !== 0) return false;

  const n = nums.length;
  const target = sum / 2;
  const dp: boolean[] = Array(target + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < n; i++) {
    for (let s = target; s >= nums[i]; s--) {
      dp[s] = dp[s] || dp[s - nums[i]];
    }
  }

  return dp[target];
}

export { canPartition };
