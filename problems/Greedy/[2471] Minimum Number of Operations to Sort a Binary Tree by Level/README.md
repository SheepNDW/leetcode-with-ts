## 2471. Minimum Number of Operations to Sort a Binary Tree by Level

將同一個 level 的數字都收集起來，然後用 Indexing Sort 的方法去貪心地交換。

例如，對一個亂數的 nums 陣列，我們可以提前知道每個數字的期望位置 `rank[nums[i]]`。我們就從前往後查看每個位置，如果目前的 `rank[nums[i]] !== i`，那麼就把 `nums[i]` 和位於 `nums[rank[nums[i]]]` 的數字交換，一直換到 `i` 這個位置上是期待中的數字。
