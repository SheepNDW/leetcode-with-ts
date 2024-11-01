## 1671. Minimum Number of Removals to Make Mountain Array

遍歷每一個元素 `nums[i]`，思考如果以它為 peak，那麼能得到多長的 mountain array。顯然對於 peak 左側，我們需要找到一個從左到右的、截止到 `nums[i]` 的最長遞增序列（LIS）；同理，對於 peak 右側，我們需要找到一個從右到左的、截止到 `nums[i]` 的最長遞增序列。

我們知道經典 LIS 演算法可以用 $O(n^2)$ 或是 $O(n \log n)$ 的時間複雜度解決，計算陣列中截止到每個元素的 LIS 長度。首先預處理得到這樣的 `leftLIS[i]` 和 `rightLIS[i]` 後，就可以知道以 `nums[i]` 為 peak 的 mountain array 長度為 `leftLIS[i] + rightLIS[i] - 1`。

最後要注意的是題目要求合法的 mountain array 長度至少為 3，所以必須滿足 `leftLIS[i]` 和 `rightLIS[i]` 的長度都至少要是 2。
