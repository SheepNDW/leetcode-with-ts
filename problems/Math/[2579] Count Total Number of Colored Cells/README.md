## 2579. Count Total Number of Colored Cells

可以觀察一下前幾分鐘的變化：

1. `n = 1` 時，染色的格子數為 1
2. `n = 2` 時，染色的格子數為 5
3. `n = 3` 時，染色的格子數為 13
4. `n = 4` 時，染色的格子數為 25
   
可以發現到每次增加的格子數量為 `4 * (n - 1)`，我們可以進一步推導出公式：

$$
\text{total} = 1 + 4 \times \sum_{i=1}^{n-1} i = 1 + 4 \times \frac{n \times (n - 1)}{2}
$$

