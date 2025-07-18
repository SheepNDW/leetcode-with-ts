## 2163. Minimum Difference in Sums After Removal of Elements

刪除 n 個元素後，剩下的 2n 個元素分成兩組，題目要求「前 n 個元素總和減去後 n 個元素總和」的最小值。

自然地，我們可以將問題轉化成：  
**找到一個分界點 k，使得左半邊和右半邊的「最佳組合」差值最小。**

- 左半邊的最佳組合：在 `nums[0]` 到 `nums[k]` 之間，選出和最小的 n 個元素（用 maxPriorityQueue 維護）。
- 右半邊的最佳組合：在 `nums[k+1]` 到 `nums[3n-1]` 之間，選出和最大的 n 個元素（用 minPriorityQueue 維護）。

做法如下：

1. 從左到右掃描，維護前面 n 個最小元素的總和，存進 `leftMin[k]`。
2. 從右到左掃描，維護後面 n 個最大元素的總和，存進 `rightMax[k]`。

最後，遍歷所有可能的分界點 k（k 從 n-1 到 2n-1），答案就是 `leftMin[k] - rightMax[k+1]` 的最小值。
