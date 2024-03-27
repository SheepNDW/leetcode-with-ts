## 41. First Missing Positive

* `Indexing Sort`

將 `nums` 最前面插入一個 `0` 調整索引，讓數字能跟索引對應。接下來就是嘗試把正整數 `1 ~ n` 盡可能按順序放入 `nums[1] ~ nums[n]` 後，從頭掃一遍 `nums`，找到的第一個 `nums[i] != i` 的數就是答案。

交換時的條件需要注意，題目要找的是最小的遺失正數，所以遇到負數因為沒有負索引直接跳過即可。

類似題目有：

* 287.Find the Duplicate Number
* 442.Find-All-Duplicates-in-an-Array 
* 448.Find-All-Numbers-Disappeared-in-an-Array 
* 645.Set Mismatch
