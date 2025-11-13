## 474. Ones and Zeroes

此題為 0-1 背包問題的變形，只是 cost 變成了兩個維度 (m, n)，我們用 `dp[i][j]` 來表示在限制 `i` 個 0 和 `j` 個 1 可以組成的最大子集數量。

我們可以得出轉移方程式：`dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1)`，其中 `zeros` 和 `ones` 分別是當前字串中 0 和 1 的數量。

```ts
for (const str of strs) {
  // 取得目前字串的 0 和 1 數量
  const [zeros, ones] = countZerosOnes(str);

  // 反向遍歷，確保每個字串只被使用一次
  for (let i = m; i >= zeros; i--) {
    for (let j = n; j >= ones; j--) {
      dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
    }
  }
}
```
