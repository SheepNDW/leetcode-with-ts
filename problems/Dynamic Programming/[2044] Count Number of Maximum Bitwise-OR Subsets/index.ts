/*
  dp[i][val]: how many subsets whose bitwise OR === val using nums[0:i]

  dp[i-1][val] => dp[i][val] += dp[i-1][val]
                  dp[i][val | x] += dp[i-1][val]
*/
function countMaxOrSubsets(nums: number[]): number {
  const M = nums.reduce((acc, num) => acc | num, 0);
  const dp: number[] = new Array(M + 1).fill(0);
  dp[0] = 1;

  for (const x of nums) {
    const prev = dp.slice();

    for (let val = 0; val <= M; val++) {
      dp[val | x] += prev[val];
    }
  }

  return dp[M];
}

export { countMaxOrSubsets };
