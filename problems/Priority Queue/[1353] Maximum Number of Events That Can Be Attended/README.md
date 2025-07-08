## 1353. Maximum Number of Events That Can Be Attended

我們將所有 events 按照開始時間排序，然後維護一個按照結束時間從早到晚順序的 PQ。

遍歷所有的日期 day（從 1 開始到所有 events 的結束時間的最大值，或簡單使用 10^5），對於每一天：

1. 將所有在當天開始的 events 加入 PQ。同時將 PQ 中所有結束時間小於當天的 events 刪除。
2. 如果 PQ 不為空，則貪心地從 PQ 中取出結束時間最早的 event，並將結果加 1。
