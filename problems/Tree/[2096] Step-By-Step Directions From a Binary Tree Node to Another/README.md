## 2096. Step-By-Step Directions From a Binary Tree Node to Another

這題和其他求 LCA 的題目不同。以前 LCA 題目只需求得 LCA 的節點本身，而這道題需要設計到路徑列印。因此我們就老實得用遞迴把 root 到 p 或者 q 的路徑先記錄起來，然後再比較得到 LCA 的位置。

我們需要記錄從 root 到 p 或 q 一路上的操作（L 或 R）。假設有兩條路徑 dirs1 和 dirs2 在第 k 個節點位置分叉（也就是 LCA 位置），根據題意我們就將 `dirs1[k:]` 全部換成 `"U"`（因為從 p 到 LCA 一路都是 up），再拼上 `dirs2[k:]` 這段路徑即可。
