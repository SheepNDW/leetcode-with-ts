/*
  dp[i]: how many new people have known the secret in the i-th day

  dp[i] = ....f(dp[i-delay])
  dp[i] -> update future dp[i+delay]

  for (let j = i + delay; j < i + forget; j++) {
    dp[j] += dp[i]
  }
*/
function peopleAwareOfSecret0(n: number, delay: number, forget: number): number {
  const MOD = 1e9 + 7;

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = i + delay; j < i + forget; j++) {
      if (j > n) break;
      dp[j] += dp[i];
      dp[j] %= MOD;
    }
  }

  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i + forget > n) {
      res += dp[i];
      res %= MOD;
    }
  }

  return res;
}

/*
  diff array

  diff[i] = dp[i] - dp[i-1]
*/
function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
  const MOD = 1e9 + 7;

  const dp = new Array(n + 1).fill(0);
  const diff = new Array(n + forget + 1).fill(0);

  diff[1] += 1;
  diff[2] -= 1;

  for (let i = 1; i <= n; i++) {
    dp[i] = (dp[i - 1] + diff[i] + MOD) % MOD;

    diff[i + delay] += dp[i];
    diff[i + forget] -= dp[i];
  }

  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i + forget > n) {
      res += dp[i];
      res %= MOD;
    }
  }

  return res;
}

export { peopleAwareOfSecret };
