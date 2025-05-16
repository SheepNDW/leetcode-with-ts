## 2901. Longest Unequal Adjacent Groups Subsequence II

定義 `dp[i]` 為以 `i` 為結尾的子序列的最大長度，初始值為 1（即每個字串本身就是一個合法子序列）。

如果 index `i` 可以接在 index `j` 後面（`j < i`），且滿足兩個條件：

1. `groups[i] != groups[j]`
2. `words[i]` 和 `words[j]` 長度相同，且漢明距離為 1（即僅一個字元不同）

那麼我們可以更新 `dp[i] = max(dp[i], dp[j] + 1)`。

為了方便回推結果，另外維護一個 `prev[i]` 陣列，紀錄 `dp[i]` 是從哪個 `j` 轉移而來。

最後找出 `dp` 最大值的位置，從該 index 用 `prev[]` 回溯整個子序列，收集對應的字串並反轉，得到最終答案。
