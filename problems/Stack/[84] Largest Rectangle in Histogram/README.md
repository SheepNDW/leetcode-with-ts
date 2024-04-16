## 84. Largest Rectangle in Histogram

經典 monotonic stack 應用題。對於每個位置 `heights[i]`，找出它的 `prevSmaller` 和 `nextSmaller`，那麼中間的區間就可以建構一個以 `heights[i]` 為高的矩形。

比較笨的方法是寫一個 3-pass，第一次遍歷用 monotonic stack 求出每個元素 `i` 的 `nextSmaller[i]`，再跑第二次求出每個元素 `i` 的 `prevSmaller[i]`，最後再跑一遍計算 `max{ area[i] = heights[i] * (nextSmaller[i] - prevSmaller[i] - 1) }`

但是可以進一步只使用 1-pass，維護一個遞增序列，當新元素 `i` 比 top 元素小時，說明此時 top 的 `nextSmaller` 就是 `i`，而 top 的 `prevSmaller` 就是次頂元素（top 的下一個）。

特殊處理：

在 `heights` 陣列的尾部新增一個 `0`，確保當整個 stack 從頭到尾都是遞增序列時在最後會強制回溯；同時也在 `heights` 頭部插入一個 `0`，是為了方便處理 `stack.pop()` 後 stack 為空的情況。
