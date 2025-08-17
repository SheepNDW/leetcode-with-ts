/*
  dfs + memo
*/
function numberOfWays0(n: number, x: number): number {
  const M = 1e9 + 7;
  const powers: number[] = [];
  let base = 1;

  while (base ** x <= n) {
    powers.push(base ** x);
    base++;
  }

  const memo = Array.from({ length: powers.length }, () => new Int32Array(n + 1).fill(-1));

  const dfs = (idx: number, remain: number): number => {
    if (remain === 0) return 1;
    if (remain < 0 || idx === powers.length) return 0;

    if (memo[idx][remain] >= 0) return memo[idx][remain];
    if (powers[idx] > remain) return 0;

    const pick = dfs(idx + 1, remain - powers[idx]);
    const noPick = dfs(idx + 1, remain);

    memo[idx][remain] = (pick + noPick) % M;
    return memo[idx][remain];
  };

  return dfs(0, n);
}

/*
  DP solution
  dp[i]: i 可以分解出的方案數
*/
function numberOfWays(n: number, x: number): number {
  const M = 1e9 + 7;
  const dp = new Int32Array(n + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    let power = i ** x;

    for (let r = n; r >= power; r--) {
      dp[r] = (dp[r] + dp[r - power]) % M;
    }
  }

  return dp[n];
}

export { numberOfWays };
