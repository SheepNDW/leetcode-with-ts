## 808. Soup Servings

題目中的 "the probability that A is used up before B, plus half the probability that both soups are used up in the same turn" 裡的 plus，其實就是一種 or 的關係。

也就是說，當 A 先倒完後回傳機率 1，而當兩者同時倒完時，回傳機率 0.5。如果這兩個情況在各個分支中都出現，就把它們的機率累加起來。

因此我們的遞迴式就可以寫成：

```ts
function dfs(a: number, b: number): number {
  if (a <= 0 && b > 0) return 1; // 邊界條件: A 先倒完
  if (a <= 0 && b <= 0) return 0.5; // 邊界條件: AB 同時倒完
  if (a > 0 && b <= 0) return 0; // 邊界條件: B 先倒完
  return (
    0.25 * (dfs(a - 100, b) + dfs(a - 75, b - 25) + dfs(a - 50, b - 50) + dfs(a - 25, b - 75))
  );
}
```

另外可以觀察到，當 `n` 大於某個臨界值後，機率會趨近於 1，因此我們可以設定一個閾值來避免過多的計算。通常這個閾值可以設為 4800、5000 或更高，因為在這個範圍內，機率已經非常接近 1。

本題還有一個小技巧，我們可以發現如果直接將毫升當作 hash 的 key，其實會切的太細，如果我們將它除以 25 把「毫升」轉換成「份數」，因為我們注意到其實每次減少的毫升數都是 25 的倍數，這樣可以大幅減少 hash 的大小，從而提高效率。
