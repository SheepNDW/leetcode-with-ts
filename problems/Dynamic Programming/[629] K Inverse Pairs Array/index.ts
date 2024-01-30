// recursive TC: O (n * n * k)
// this solution will TLE
function kInversePairs0(n: number, k: number): number {
  const MOD = 1e9 + 7;
  const cache: Record<string, number> = {}; // (n, k) -> count

  function count(n: number, k: number) {
    if (n === 0) {
      return k === 0 ? 1 : 0;
    }
    if (k < 0) return 0;

    const key = `${n}-${k}`;
    if (cache[key] !== undefined) return cache[key];

    cache[key] = 0;
    for (let i = 0; i < n; i++) {
      cache[key] = (cache[key] + count(n - 1, k - i)) % MOD;
    }

    return cache[key];
  }

  return count(n, k);
}

/* 
  DP solution but still TLE

  dp[n][k]: num of arrays with k inverse pairs, given n elements.

  dp[i][j] = dp[i-1][j] + dp[i-1][j-1] + dp[i-1][j-2] +...+ dp[i-1][j-(i-1)]
*/
function kInversePairs1(n: number, k: number): number {
  const MOD = 1e9 + 7;
  const dp: number[][] = Array(n + 1)
    .fill(null)
    .map(() => Array(k + 1).fill(0));

  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= k; j++) {
      for (let pairs = 0; pairs <= Math.min(j, i - 1); pairs++) {
        dp[i][j] += dp[i - 1][j - pairs];
        dp[i][j] %= MOD;
      }
    }
  }

  return dp[n][k];
}

/*
  DP + math
*/
function kInversePairs(n: number, k: number): number {
  const MOD = 1e9 + 7;

  const dp: number[][] = Array(n + 1)
    .fill(null)
    .map(() => Array(k + 1).fill(0));

  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= k; j++) {
      if (j >= i) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - i];
        dp[i][j] += MOD; // 加一個 MOD 回去得到原始值，否則會有負數
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
      dp[i][j] %= MOD;
    }
  }

  return dp[n][k];
}

/*
  DP + sliding window
*/

function kInversePairs3(n: number, k: number): number {
  const MOD = 1e9 + 7;
  let prev = Array.from({ length: k + 1 }, () => 0);
  prev[0] = 1;

  for (let N = 1; N < n + 1; N++) {
    const curr = Array.from({ length: k + 1 }, () => 0);
    let total = 0; // sliding window
    for (let K = 0; K < k + 1; K++) {
      if (K >= N) {
        total -= prev[K - N];
        total += MOD;
      }
      total = (total + prev[K]) % MOD;
      curr[K] = total;
    }
    prev = curr;
  }

  return prev[k];
}

export { kInversePairs };
