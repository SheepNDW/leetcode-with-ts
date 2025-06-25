## 2040. Kth Smallest Product of Two Sorted Arrays

本題是類似 1918.Kth Smallest Subarray Sum 的套路題，採用二分搜值來猜測答案。

令 `count = countSmallerOrEqual(mid)` 來計算有多少個乘積小於等於 `mid`，如果 `count < k`，代表 `mid` 肯定不是答案同時我們需要繼續猜大一點的值，因此 `lower = mid + 1`。如果 `count >= k`，代表 `mid` 可能是答案或是更小的值，因此我們需要繼續猜小一點的值，令 `upper = mid`。直到收斂到 `lower == upper`，此時 `lower` 即為答案。

那麼如何實作 `countSmallerOrEqual(mid)` 呢？

最簡單的做法就是遍歷 `nums1[i]`，在有序陣列 `nums2` 中使用二分搜尋來找出 `nums2[j]` 使得 `nums1[i] * nums2[j] <= mid`，而這個臨界位置 `j` 的確定需要分幾個情境討論：

如果 `nums1[i] > 0`，那麼我們可以得 `nums2[j] <= mid / nums1[i]`，我們可以用 `upperBound` 求出第一個大於 `mid / nums1[i]` 的位置 `j`，那麼 `[0:j-1]` 都是滿足條件的解。

如果 `nums1[i] < 0`，根據不等式性質，移項需要注意符號的變化，這時候我們需要 `nums2[j] >= mid / nums1[i]`，此時用 `lowerBound` 求出第一個大於等於 `mid / nums1[i]` 的位置 `j`，那麼 `[j:n-1]` 都是滿足條件的解。

最後是特殊的情況 `nums1[i] == 0`，這時候只要 `mid >= 0`，那麼所有的 `nums2[j]` 都滿足條件。
