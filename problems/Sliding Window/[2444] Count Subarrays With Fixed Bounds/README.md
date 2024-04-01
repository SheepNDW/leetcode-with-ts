## 2444. Count Subarrays With Fixed Bounds

**KEY:** 掌握數"subarray"的技巧。通常都是固定一個端點，查看另一個端點可以延伸到哪。

如果考慮這個 subarray 的右邊 `nums[i]`，那麼左端點之後必須包含至少一個 `minK` 和 `maxK`。所以只要知道離左邊最近的 `minK` 和 `maxK`，取最小值 `j`，那麼 `[j:i]` 就使以 `i` 為結尾、最短的符合條件的 subarray。左端點從 `j` 向左延伸，這個 subarray 依然有效，但是要注意左端點不能延伸到不合法的區域，也就是小於 `minK` 或是大於 `maxK` 的地方，所以實際的左端點移動範圍就是 `j - boundary`，`boundary` 是 `i` 之前最近的不合法位置。
