## 3306. Count of Substrings Containing Every Vowel and K Consonants II

此題與 `3298. Count Substrings That Can Be Rearranged to Contain a String II` 相似。

我們另 `vowelCount` 記錄目前母音種類個數，`consonantCount` 記錄子音字元的個數。對於固定左端點 `i` 的區間而言，如果 `vowelCount < 5 || consonantCount < k`，則右端點 `j` 可以往右移動，直到 `vowelCount == 5 && consonantCount >= k` 為止。當我們停止移動 `j` 時，有兩種情況：

1. 如果 `consonantCount > k`，那我們必然要嘗試右移 `i`，因為再右移 `j` 不會使得 `consonantCount` 條件被滿足。
2. 如果 `consonantCount == k`，則我們得到了一個合法的區間 `[i, j]`。那麼我們是否還有其他以 `i` 為左端點的合法區間呢？事實上，如果 `j` 的右邊有連續的母音出現的話，這些都是可以納入合法區間的。所以我們可以提前計算一個陣列 `consecutive[k]`，記錄 `k` 及其右邊連續母音的個數。這樣答案就增加了 `1 + consecutive[j+1]`。

以上就考慮完了所有以 `i` 為左端點的合法區間，下一步就是將 `i` 右移一格，更新 `vowelCount` 和 `consonantCount`，然後繼續上述過程。
