## 2275. Largest Combination With Bitwise AND Greater Than Zero

將若干個數 bitwise AND 之後的結果 s 如果大於 0，說明至少有一個 bit 位是 1，也就是說所有的數在該 bit 位上不能有 0 存在。所以我們可以檢查每個 bit，統計有多少元素在該 bit 位上是 1，那他們之間的 AND 一定是大於 0 的。

那麼對於一個 32bit 的整數，我們檢查每個位置之後，可以找到一個最大的 count `M`，但這個 `M` 是不是就是最終答案呢，有沒有可能更多呢？答案是否定的，如果有 `M + 1` 個元素的 AND 是非 0 的，那麼一定有一個 bit 上存在 `M + 1` 個 1，那麼這就和我們假設 `M` 是所有 bit 位上非零元素的最大值矛盾了。
