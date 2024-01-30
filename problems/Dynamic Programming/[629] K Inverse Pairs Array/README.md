## 629. K Inverse Pairs Array

定義 `dp[n][k]` 為從 `1 ~ n` 的任意排列中，inverse pairs 數量為 `k` 的組合數。

```
1 ... 4

5 x x x x creates 4 new inverse pairs
x 5 x x x creates 3 new inverse parrs
...
x x x x 5 creates 0 new inverse paris 
```

假設 xxxx 代表 `dp[4][j-0]` 的所有排列可能。已知 xxxx5 不會增加 inverse pair 數量，所以 `dp[4][j]` 是 `dp[5][j]` 的一部分。
假設 xxxx 代表 `dp[4][j-1]` 的所有排列可能。已知 xxx5x 增加一個 inverse pair 數量，所以 `dp[4][j-1]` 是 `dp[5][j]` 的一部分。
假設 xxxx 代表 `dp[4][j-2]` 的所有排列可能。已知 xx5xx 增加兩個 inverse pair 數量，所以 `dp[4][j-2]` 是 `dp[5][j]` 的一部分。
假設 xxxx 代表 `dp[4][j-3]` 的所有排列可能。已知 x5xxx 增加三個 inverse pair 數量，所以 `dp[4][j-3]` 是 `dp[5][j]` 的一部分。
假設 xxxx 代表 `dp[4][j-4]` 的所有排列可能。已知 5xxxx 增加四個 inverse pair 數量，所以 `dp[4][j-4]` 是 `dp[5][j]` 的一部分。

可以從此推導出的關係為：

```ts
dp[i][j] = dp[i-1][j] + dp[i-1][j-1] + dp[i-1][j-2] +...+ dp[i-1][j-(i-1)]
```

dp 邊界條件為 `dp[i][0] = 1`，表示沒有任何 inverse pairs 的排列只有一種，就是小到大依序排列。

但直接使用後會 TLE:

```ts
function kInversePairs(n: number, k: number): number {
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
```

可以再進一步簡化：

```ts
dp[i][j] = dp[i-1][j-0] + dp[i-1][j-1] + dp[i-1][j-2] + dp[i-1][j-3] +...+ dp[i-1][j-(i-1)]

// 代入 j-1, 發現斜對角都相等
dp[i][j-1] = dp[i-1][j-1] + dp[i-1][j-2] + dp[i-1][j-3] +...+ dp[i-1][j-(i-1)] + dp[i-1][j-i]
```

將兩個相減：

```ts
dp[i][j] - dp[i][j-1] = dp[i-1][j-0] - dp[i-1][j-i]

// 移項後得到新的 dp[i][j] 關係式
dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-i]
```

要注意的是，只有 `j >= i` 時才有 `dp[i-1][j-1]`，否則省略。
