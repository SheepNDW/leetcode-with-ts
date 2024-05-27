## 1608. Special Array With X Elements Greater Than or Equal X

首先我們想一想，為什麼該題如果有解，必然是唯一解？假設存在 `x`，滿足大於等於 `x` 的元素個數是 `x`；另外有一個更大的 `y`，滿足大於等於 `y` 的元素個數是 `y`。這有什麼矛盾呢？矛盾在於，因為 `x` 小於 `y`，所以“大於等於 `x` 的元素個數”必然多於“大於等於 `y` 的元素個數”。然而前者是 `x`，後者是 `y`，前者少於後者，矛盾！

解法 1：Binary Search O(n log n)

`x` 的上限是陣列的長度 `n`，因為不可能有多餘 `n` 個數字來計數。

使用二分搜值 `x`，對於某個 `x` 我們遍歷整個陣列統計有多少個 `>=x` 的 count。如果 `count === x`，那麼就是唯一的解，直接回傳；如果 `count > x`，那麼目前猜測的 `x` 值猜小了，反之則代表猜大了。

對於有確定唯一解的題，可以使用這種模板：

```ts
while (left<=right)
{
  mid = ...;
  if (isOK(mid))
    return mid;
  else if (isTooLarge(mid))
    mid = right-1;
  else if (isTooSmall(mid))
    mid = left+1;
}
return -1;
```
> 此模板不適用於求最佳解（最大/最小）的題目。

解法 2：計算頻率的後綴陣列 O(n)

考慮到 `x` 本身並不大，我們直接開一個陣列 `freq` 存放各種元素的頻次，即 `freq[i]` 表示 `i` 出現了幾次。如果是大於等於 `n` 的元素，頻次都統計在 `freq[n]` 裡。

從大到小遍歷 X，在遍歷過程中通過累加 `freq[i]` 自然而然地把所有大於等於 `x` 的元素總頻次計算出來，只要比較 count 和 x 是否相等即可。
