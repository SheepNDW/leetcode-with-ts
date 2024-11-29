## 2290. Minimum Obstacle Removal to Reach Corner

這是一道典型的最短路徑問題，但與一般的最短路徑不同，權重只有兩種情況（0 和 1）。因此可以用 0-1 BFS（Zero-One Breadth-First Search）的策略來高效解決。

我們優先探索相鄰的空白格，在沒有空白時才移動到有障礙的格子。使用一個 `deque` 來實現 BFS，在探索相鄰的格子時，如果是空白格，我們可以直接將其加入 deque 的前端，而如果是障礙格，則加入 deque 的後端。這樣可以確保在 deque 中，空白格的優先度高於障礙格。

維護一個 `minObstacles` grid 來記錄到達每個格子的最小障礙數，初始化為無窮大（表示尚未拜訪過）。然後先將左上也就是起點的設置為 `[0, 0 ,0]`（obstacle count, x, y），並將其加入 deque 然後開始 BFS。

