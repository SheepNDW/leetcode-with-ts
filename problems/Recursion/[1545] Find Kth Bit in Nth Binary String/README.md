## 1545. Find Kth Bit in Nth Binary String

$S_n$ 的長度為 $2^n - 1$，整個字串是由：$S_{n-1} + 1 + reverse(invert(S_{n-1}))$ 組成。

中間的字元一定是 `'1'`，所以我們可以先找到中間的字元的索引，然後根據索引與 `k` 的關係來決定要往哪個方向找。

而 `k` 的位置可以分成三種情況：

1. `k == mid`：中間的字元一定是 `'1'`，所以直接回傳 `'1'`。
2. `k < mid`：`k` 在左半邊，對應到 $S_{n-1}$ 的位置。
3. `k > mid`：`k` 在右半邊，對應到 $reverse(invert(S_{n-1}))$ 的位置。

遞迴的邏輯：

1. 字串長度為 `1` 時，直接回傳 `'0'`。
2. 若 `k == mid`，直接回傳 `'1'`。
3. 若 `k < mid`，則遞迴 $S_{n-1}$ 裡的相同位置。
4. 若 `k > mid`，則遞迴 $S_{n-1}$ 裡 $k' = 1 + len(S_n) - k$ 的位置。

```
假設 n = 3, k = 6

011 1 001
 L  M  R

L 與 R 之間的映射關係為兩端對稱然後反轉：

123 4 567
011 1 001

k = 6 可以成在 011 中查找 k = 1 + (7 - 6) = 2 的位置，然後將其取反。

123
011

位置 2 -> '1' 取反 '0'
```