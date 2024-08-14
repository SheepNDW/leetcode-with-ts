## 40. Combination Sum II

這題和 LC39 類似，但要考慮的是假設 `target = 4, candidates = [3, 1, 1]`，那麼按照傳統 DFS 來找，會搜尋到兩個組合 `[3, 1]`，這兩個組合中的 1 其實對應著的是 cadidates 裡不同的元素，所以目標在於如何有效率地去除這些重複的情況。

首先將 cadidates 排序。然後規定：凡是相同的元素，我們只能按照先後順序連續取，而不能跳著取。例如上面的例子，如果要取一個 1，那麼就取第一個 1，如果要取兩個 1，就取前兩個 1 依此類推。

如何去實作這個過濾呢？

```ts
for (let i = start; i < end; i++) {
  if (i > start && candidats[i] == candidates[i - 1]) {
    continue;
  }

  // do your recursion here
}
```

這段程式碼的語境是，在這一輪中，我們需要在 `candidates[start:end]` 中間取一個數加入 `comb`。如果選中了 `candidates[i]`，那麼說明 `candidates[i-1]` 沒有被選中。此時如果發現 `candidats[i] == candidates[i-1]`，就代表相同的元素我們“跳著”選了，這樣違反了我們訂下的規則，可以終止。

有一個特例就是如果選中的 i 就是 start，可以豁免，這是因為上一輪我們選中的就是 `candidates[i-1]`。這樣即使 `candidats[i] == candidates[i-1]` 也只是我們順著連續選取而已。

