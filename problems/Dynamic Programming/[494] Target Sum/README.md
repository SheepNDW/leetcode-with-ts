## 494. Target Sum

用 DFS 很直觀，但會 TLE，除了記憶化之外還需要剪枝，比較精妙的方式是利用 DP。

開一個二維 DP 陣列 `DP[i][s]`，表示前 `i` 個數可以通過加減運算得到 `s` 的個數，然後就可以導出狀態轉移關係：

```
for i = 1 to N
  for s = -SUM to SUM
   {
    dp[i][s]+=dp[i-1][s-nums[i]]
    dp[i][s]+=dp[i-1][s+nums[i]]
   }
```

唯一需要考慮的問題是，`s` 可能是負數，而 `s` 作為陣列的 index 不能為負。解決方法就是給s加上一個 SUM 的偏移，將 `[-SUM,SUM]` 的區間平移至 `[0,SUM*2]` 作為DP陣列的第二個維度的 index
