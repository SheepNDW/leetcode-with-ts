## 2161. Partition Array According to Given Pivot

解法 1：

掃過一輪然後分成三組，最後再合併起來。

解法 2：

透過 two pointer 來避免使用多個陣列來儲存。

用 `i` 和 `j` 代表從陣列頭尾開始掃描，然後準備一個 `i2`、`j2` 分別代表 `< pivot` 元素的存放位置和 `> pivot` 元素存放的位置。

1. 第一次遍歷：
   1. 若 `nums[i] < pivot`，則放入 `res[i2]` 並將 `i2` 向右移。
   2. 若 `nums[j] > pivot`，則放入 `res[j2]` 並將 `j2` 向左移。
   3. `i` 向右走，`j` 向左走，確保同時從頭尾掃描。
2. 最後在 `i2` 和 `j2` 之間填入 pivot。
