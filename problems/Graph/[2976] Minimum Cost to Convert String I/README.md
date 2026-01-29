## 2976. Minimum Cost to Convert String I

題目給了兩個字串，`source` 和 `target`，他們長度相同，並且只包含小寫字母。此外還有三個陣列：`original`、`changed` 和 `cost`，這三個陣列的長度相同，分別表示可以進行的字母轉換操作以及對應的成本。

題目要求的是使用一系列轉換操作，將 `source` 字串轉換成 `target` 字串，並且使得總成本最小化。如果無法完成轉換，則回傳 -1。

### 解題思路

此題就是求最短路徑的模板題，我們可以將每個字母視為圖中的一個節點，而每個轉換操作則視為一條有向邊，邊的權重即為轉換的成本。最終題目要求所有指定變化的最小成本，也就是對應頂點之間的最短路徑和。

用 Floyd 來求解比較簡單，因為字母只有 26 個，所以 Floyd 的 O(N^3) 複雜度是可以接受的。我們先建立一個 26x26 的距離矩陣，初始時將所有距離設為無限大，然後將每個字母到自己的距離設為 0。接著根據 `original`、`changed` 和 `cost` 陣列來更新距離矩陣中的邊權重。要注意的是題目中同一條邊可能重複出現，我們需要取最小的邊權重。

```ts
const dp = Array.from({ length: 26 }, () => Array(26).fill(Infinity));

for (let i = 0; i < 26; i++) {
  dp[i][i] = 0;
}

for (let i = 0; i < cost.length; i++) {
  const x = getCharCode(original[i]);
  const y = getCharCode(changed[i]);
  dp[x][y] = Math.min(dp[x][y], cost[i]);
}
```
