## 948. Bag of Tokens

對 `tokens` 做排序，讓 power 優先去換面額最小的 `tokens[left]`（face-up），如果目前的 power 不足就拿 1 分去從尾端最大的 `tokens[right]` 換 power 出來（face-down），代價就是少了一分但是可以多出 `tokens[right]` 的 power 繼續從左側去換分。

要注意的是在更新最大分數時要使用 `Math.max` 去維持目前的 score 一定是最大的，因為有可能到最後都是用 face-down。
