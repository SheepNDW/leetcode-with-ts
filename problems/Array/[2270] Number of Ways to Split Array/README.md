## 2270. Number of Ways to Split Array

根據題目，我們需要：

1. 計算每個可能的分割點 i 的左側與右側子陣列總和。
2. 判斷是否滿足條件 `sum_left ≥ sum_right`。
3. 回傳滿足條件的分割方法數量。

那麼就是一個經典的 prefix sum 問題，建完一個 presum 陣列後，我們只要從 `0` 到 `n-2` 遍歷每個可能的分割點 `i`，一次判斷它的 `sum_left` 與 `sum_right` 是否滿足條件即可。
