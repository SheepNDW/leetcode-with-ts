## 3152. Special Array II

我們需要確認每組 subarray `nums[from:to]` 是否為 special，也就是每兩兩相鄰的元素得奇偶數不同，即子陣列元素在奇數偶數之間交替。

* 解法一：binary search

我們先掃過一次 nums，檢查每一個 index，然後當該索引 `i` 與 `i - 1` “違規”時，就加入一個 `violatingIndices` 陣列中，找到這些違規索引後，我們可以知道包含任何這些索引的任何 subarray 都不是 special。相反，如果 subarray 不包含違規索引，則它是 special。

我們可以對違規索引執行 binary search，以查看是否有任何違規索引落在範圍 `[start + 1, end]` 之間。

* 解法二：prefix sum

我們換一種預處理的方式，我們計算 `nums` 中每個索引 `i` 之前（包含 `i`）的違規索引數量，也就是準備一個 `prefix`，其中 `prefix[i]` 是 `nums[0:i]` 中的違規索引數量。

建立這個 `prefix` 我們可以直接掃過一次 `nums`，並且檢查 `nums[i]` 是否與 `nums[i - 1]` 的奇偶性相同：如果相同，代表找到一個新的違規索引，我們可以更新 `prefix[i] = prefix[i - 1] + 1`；如果不同，則 `prefix[i] = prefix[i - 1]`。

這個 `prefix` 陣列的好處是，我們可以在 `O(1)` 時間內查找任何 subarray `nums[from:to]` 是否為 special，只需檢查 `prefix[to] - prefix[from - 1]` 是否為 0。
