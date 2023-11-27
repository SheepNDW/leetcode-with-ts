// Top-down
function knightDialer0(n: number): number {
  const MOD = 1e9 + 7;
  const jumps = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];
  const memo: number[][] = Array.from({ length: n }, () => Array(10).fill(0));

  const dp = (remain: number, square: number) => {
    if (remain === 0) return 1;
    if (memo[remain][square] !== 0) return memo[remain][square];

    let count = 0;
    for (const next of jumps[square]) {
      count = (count + dp(remain - 1, next)) % MOD;
    }

    memo[remain][square] = count;
    return count;
  };

  let ans = 0;
  for (let i = 0; i < 10; i++) {
    ans = (ans + dp(n - 1, i)) % MOD;
  }

  return ans;
}

// Bottom-up
function knightDialer(n: number): number {
  const MOD = 1e9 + 7;
  const jumps = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];

  let dp: number[] = Array(10).fill(1);

  for (let i = 2; i <= n; i++) {
    const newDp = Array(10).fill(0);

    for (let j = 0; j < 10; j++) {
      for (const next of jumps[j]) {
        newDp[next] = (newDp[next] + dp[j]) % MOD;
      }
    }

    dp = newDp;
  }

  let ans = 0;
  for (let i = 0; i < 10; i++) {
    ans = (ans + dp[i]) % MOD;
  }

  return ans;
}

export { knightDialer };
