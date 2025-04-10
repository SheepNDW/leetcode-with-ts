## 2999. Count the Number of Powerful Integers

對於區間計數，常用的技巧就是轉化為 `helper(finish, limit, s) - helper(start-1, limit, s)`，其中 `helper(boundStr, limit, s)` 表示在 `[1:boundStr]` 區間內有多少個符合條件的數（即每個 digit 不超過 limit 且後綴為 s）。

接下來設計這個 `helper` 函式：
令上界 `bound` 長度為 `d`，那麼我們計數的時候只需要逐位填充、循環 `d` 次即可。對於第 `k` 位而言，有兩種情況：

1. 如果填充的前 `k-1` 位小於 bound 同樣長度的前綴，那麼第 `k` 位可以是任意 0 ~ limit 都不會超過上限 bound。甚至從第 `k+1` 位起，直至固定的後綴 s 之前，總共有 `d = bound.length - s.length - k` 位帶填充的數字，都可以任意填上 0 ~ limit。所以直接回傳：`Math.pow(1 + limit, d)`
2. 如果填充的前 `k-1` 位等於 bound 同樣長度的前綴，那麼第 `k` 位就只能填充 `0 ~ min(limit, a[k])`，確定範圍之後，接下來遞迴處理下一位即可。要注意如果填充為 `a[k]`，需要告知函式"已構造的前綴繼續與 bound 相同"，否則告知函式"已構造的前綴小於 bound"，讓接下來的遞迴函式知道選擇哪一個分支。
