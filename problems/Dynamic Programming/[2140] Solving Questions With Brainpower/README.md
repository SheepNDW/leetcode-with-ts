## 2140. Solving Questions With Brainpower

在這題中，我們需要在**解答**和**跳過**問題之間進行選擇，來獲得**最大總分**。  
每解答一題，會強制跳過 `brainpower[i]` 題，所以當我們選擇解答某題時，需要考慮之後可以選擇的題目。

#### DP 思路

本題的思路非常巧妙，我們是從後往前遍歷的，定義 `dp[i]` 表示從第 `i` 題開始能獲得的最大分數：

如果我們跳過第 `i` 題，那麼 `dp[i] = dp[i + 1]`，如果做第 `i` 題，那麼我們需要跳過 `questions[i][1] (brainpower)` 題，這樣的話我們就可以獲得 `questions[i][0] (points)` 分，所以 `dp[i] = dp[i + brainpower + 1] + points`，這樣無論 `dp[i + brainpower + 1]` 對應的是取還是不取第 `i+brainpower+1` 題，都不會去影響到第 `i` 題的選擇。

最終 `dp[i]` 就是在這兩種決策中取最大值，即 `dp[i] = max(dp[i + 1], dp[i + brainpower + 1] + points)`。最終答案就是 `dp[0]`。
