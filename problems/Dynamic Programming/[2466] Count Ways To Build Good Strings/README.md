## 2466. Count Ways To Build Good Strings

你有一個範圍 `[low, high]`，需要構造長度在此範圍內的所有可能「Good Strings」的數量。構造字串時有以下限制：

1. 只能新增長度為 zero 或 one 的片段來構造字串。
2. 字串長度必須落在 `[low, high]` 之間，包含邊界。

初始一個 dp 陣列，定義 `dp[i]` 為長度 `i` 所能夠造出的字串數量，並將初始 `dp[0]` 設置為 1，因為長度 0 是一個有效的狀態。

而 `dp[i]` 可以由 `dp[i - zero]` 和 `dp[i - one]` 相加而來，其中 `zero` 和 `one` 分別為 zero 和 one 的長度。

填充完整個 dp 陣列後，最後將 `dp[low]` 到 `dp[high]` 之間的數量相加即為答案。
