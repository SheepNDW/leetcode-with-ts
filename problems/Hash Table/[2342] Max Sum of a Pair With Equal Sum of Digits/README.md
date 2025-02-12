## 2342. Max Sum of a Pair With Equal Sum of Digits

我們要找出陣列中 兩個數字之和最大 的配對 `(nums[i], nums[j])`，但這兩個數字的 數字總和（digit sum）必須相同。

首先我們要計算數字總和（digit sum），例如 `18 -> 1 + 8 = 9`，然後建立一個 hash 來記錄相同數字總和的數字，對於每一個 `key` 所對應的最大兩個數字來嘗試組出最大和。
