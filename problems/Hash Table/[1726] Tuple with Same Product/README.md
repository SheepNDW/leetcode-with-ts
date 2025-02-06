## 1726. Tuple with Same Product

使用一個 map 存下每個可能的 `a * b` 的結果，這樣我們可以快速找到擁有相同乘積的組合。

思路：

1. 使用雙層迴圈計算所有 `(a, b)` 的乘積 `product`，並存入 `Map` 中。
2. 利用 `Map` 紀錄 `product` 出現的次數：
   - 若 `product` 已經存在於 Map，則代表找到新的 `(c, d)`，可以與 `(a, b)` 組成四元組，將 `map[product]` 加到 `count` 中。
   - 更新 `map[product]`，增加該乘積的出現次數。
3. 最終答案為 `count * 8`：
   - 每組 `(a, b, c, d)` 有 **8 種排列**：
     ```plaintext
     (a, b, c, d), (a, b, d, c), (b, a, c, d), (b, a, d, c),
     (c, d, a, b), (c, d, b, a), (d, c, a, b), (d, c, b, a)
     ```
   - 因此結果要乘上 `8`。
