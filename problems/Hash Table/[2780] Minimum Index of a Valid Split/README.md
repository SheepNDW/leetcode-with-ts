## 2780. Minimum Index of a Valid Split

題目定義：如果某個數字 `x` 在某個陣列 `arr` 中出現的次數超過 `arr.length / 2`，那麼它就是該陣列的 dominant element（主導元素）。

現在給你一個整數陣列 `nums`，並且題目保證整體陣列中存在一個數字 `x`，是出現次數最多且唯一的 dominant 數。你需要找出一個最小的 index `i`，使得：

- `x` 在左半邊（`nums[0..i]`）的出現次數 > 左半邊長度的一半
- `x` 在右半邊（`nums[i+1..n-1]`）的出現次數 > 右半邊長度的一半

如果找不到符合條件的分割點 `i`，則回傳 -1。

因為題目明確說明存在一個 dominant element，而依定義，dominant 是「在陣列中出現次數超過一半的元素」，所以不可能有兩個這樣的數字共存。因此我們可以放心地找出這個唯一的 `x` 作為檢查的基礎。

#### 解法 1：hash map

用一個 hash map 來記錄陣列中每個數出現的次數，然後找出 dominant 數 `x` 以及它出現的次數，然後初始化左邊的 `leftCount = 0`，右邊的 `rightCount = x 的出現次數`，然後從左到右遍歷陣列，每當 `nums[i] == x` 時，`leftCount += 1`，然後 `rightCount -= 1`，如果 `leftCount > (i+1)/2` 且 `rightCount > (n-i-1)/2`，則回傳 `i`。

#### 解法 2：Boyer-Moore Majority Vote Algorithm

我們可以用 Boyer-Moore 投票演算法在常數空間內找出眾數，又因為題目保證有一個 dominant 數，所以我們可以直接用 Boyer-Moore 演算法找出 dominant 數，然後再用解法 1 的方法找出 index。

核心邏輯：

```ts
let candidate = -1;
let count = 0;

for (let i = 0; i < n; i++) {
  if (count === 0) {
    candidate = nums[i];
  }
  count += nums[i] === candidate ? 1 : -1;
}
```
