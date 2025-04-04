## 2873. Maximum Value of an Ordered Triplet I

題目要求找出一個索引三元組 (i, j, k)，使得 i < j < k，並回傳非負的 `(nums[i] - nums[j]) * nums[k]` 的最大值，如果滿足條件的三元組值為負，則回傳 0。

#### 解法 1：Brute-force

最直覺的做法就是直接跑三層迴圈，找出所有的三元組 (i, j, k)，並計算 `(nums[i] - nums[j]) * nums[k]` 的值，然後取最大值。

#### 解法 2：Greedy

當我們固定住 `j` 和 `k` 後，可以觀察到要使得 `(nums[i] - nums[j]) * nums[k]` 最大化，`nums[i]` 需要盡可能大，也就是說我們要在 `[0, j)` 的區間中找出最大的 `nums[i]`。

這樣我們就可以用兩層迴圈分別跑 `j` 和 `k`，然後用一個變數 `preMax` 來追蹤目前區間 `[0, j)` 中的最大值，這樣就可以拔掉一層迴圈讓時間複雜度降到 O(n^2)。

#### 解法 3：Greedy + prefix & suffix

根據題目的公式 `(nums[i] - nums[j]) * nums[k]`，我們如果將 `nums[j]` 固定住，那最大值就會出現在 `nums[i]` 和 `nums[k]` 分別在 `[0, j)` 和 `[j + 1, n)` 的區間中的最大值時。

我們可以準備兩個陣列 `leftMax` 和 `rightMax`，`leftMax[i]` 代表 `nums[0]` 到 `nums[i]` 的最大值，`rightMax[i]` 代表 `nums[i]` 到 `nums[n - 1]` 的最大值。這樣我們在列舉 `j` 時，就只要計算 `(leftMax[j] - nums[j]) * rightMax[j]` 即可。

如此一來，我們就可以在 O(n) 的時間內計算出 `leftMax` 和 `rightMax`，然後再 O(n) 的時間內列舉所有的 `j`，這樣總時間複雜度就是 O(n)。
