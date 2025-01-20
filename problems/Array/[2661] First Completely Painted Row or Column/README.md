## 2661. First Completely Painted Row or Column

建立一個數字對應矩陣中 row 或 col 的映射表，接著準備兩個陣列 rows 和 cols 分別紀錄每個 row 和 col 中被塗色的格子數，`rows[i]` 代表第 `i` 列已經被塗色的格數、`cols[j]` 代表第 `j` 行已經被塗色的格數。

最後遍歷 arr 每個元素，透過映射表找到對應的 row 和 col，將該列與行的塗色數加一，若該列或行的塗色數等於該列或行的長度，則代表該列或行已經被完全塗色，回傳該列或行的索引。

