## 1751. Maximum Number of Events That Can Be Attended II

有 n 個活動，每個活動有 `[startDay, endDay, value]`，每天只能參加一場，活動不能重疊，最多可以參加 `k` 場活動，問最大總 value 為何

本題和 1235 很像，差別在於 dp 狀態多了一個維度來表示可以取多少個區間。

上來先將所有 events 按照結束時間排序，令 `dp[i][t]` 表示在前 `i` 個 events 中，最多可以取 `t` 個區間的最大值。在計算 `dp[i][t]` 時有兩種決策：

1. 不取 `event[i]`，那麼 `dp[i][t] = dp[i-1][t]`。
2. 選擇取 `event[i]` 作為第 `t` 個區間，那麼 `dp[i][t]` 就需要考慮第 `t-1` 個區間在哪，顯然這個區間的結束時間必須小於 `event[i]` 的開始時間。用二分搜尋找到這個結束時間恰好小於 `event[i][0]` 的第 `j` 個區間，於是 `dp[i][t]` 就可以轉化為在前 `j` 個區間中最多取 `t-1` 個區間的最大值加上 `event[i][2]`。
