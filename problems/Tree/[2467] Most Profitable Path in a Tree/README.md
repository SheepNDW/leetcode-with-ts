## 2467. Most Profitable Path in a Tree

跑兩次 dfs，第一次求出每個點到 bob 所在節點的距離（但只限 bob 節點往上到 root 的部分），第二次求每個點與 root 的距離。

對於每個節點來說，如果前者距離大於後者距離，則對於 Alice 來說沒有收益。如果前者距離小於後者距離，Alice 就可以拿取這個節點的收益。基於這個原則，第二次 dfs 的時候可以求得收益最大的一條從 root 到 leaf 的路徑。

