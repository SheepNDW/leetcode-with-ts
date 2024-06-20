## 1482. Minimum Number of Days to Make m Bouquets

只要天數越多，可以選擇的花就越多，能找到連續 `k` 朵花的機率就越高。這是一個單調遞增的情況，很適合用 binary search 去找出所需最少的天數。

檢查在第 `day` 天，是否可以找到 `m` 束連續的 `k` 朵花，可以就繼續猜小的 `day`，反之則猜更大的。
