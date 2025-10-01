## 347. Top K Frequent Elements

給一個整數陣列 `nums` 與整數 `k`，回傳出現頻率最高的 `k` 個元素。題目保證答案唯一，且不要求輸出順序固定（只要是那 `k` 個元素即可）。

### 解題重點
1. 需要統計每個數字的出現次數 (frequency counting)。
2. 取得「最高頻率的前 k 個」=> Top-K 問題常見技巧：
	 - 使用大小為 `k` 的 min-heap。
	 - 或利用「頻率範圍有限」的特性進行 bucket sort（當最大頻率不會超過 `n` 時可行）。
	 - 使用 quick select (類似快速排序 partition 的概念)

#### quick select

這題的一個常見解法是使用 quick select，這個方法的平均時間複雜度是 O(n)，具體思想和 quick sort 類似，每次尋找一個 pivot，根據這個 pivot 值用三個指標將陣列分成三部分：小於 pivot、等於 pivot、大於 pivot。然後根據各部分的數量與 k 的關係決定下一步要遞迴處理哪一部分。最後當我們找到頻率值 `f`（在頻率排序中第 k 大的頻率）後，再從原始的頻率計數中挑出所有頻率大於等於 `f` 的元素即可。

三向分割（Dijkstra 3-way partition）

對區間 `[a .. b]` 選一個 `pivot = freq`，以三個指標分割陣列：

初始化：`i = a`, `j = b`, `t = a`，其中 `i` 負責追蹤 `< pivot` 的邊界，`j` 負責追蹤 `> pivot` 的邊界，`t` 則代表下一個要檢查的元素位置。

如果目前 t 指向的頻率小於 pivot，則將 `freq[t]` 與 `freq[i]` 交換，並將 `i`、`t` 向右移動一格。

如果目前 t 指向的頻率等於 pivot，則將 `t` 向右移動一格。

如果目前 t 指向的頻率大於 pivot，則將 `freq[t]` 與 `freq[j]` 交換，並將 `j` 向左移動一格（注意此時不移動 `t`，因為交換過來的元素還沒檢查過）。

* 迴圈結束後：
  * `[a .. i-1]`：`freq < pivot`
  * `[i .. j]`：`freq == pivot`
  * `[j+1 .. b]`：`freq > pivot`
