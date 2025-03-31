## 1514. Path with Maximum Probability

本題要找到從 start 到 end 節點的最大成功機率路徑。我們可以類比於最短路徑問題，採用 Dijkstra 演算法的變形來解。

我們將加法路徑長度轉換為乘法路徑機率，要最大化機率乘積，所以使用 Max-Priority Queue，每次取出機率最大的路徑進行擴展。
