## 2812. Find the Safest Path in a Grid

預先處理 `grid`，透過 multi-source BFS 求出每個格子到離其最近的 thief 的距離 `grid[i][j]`。為了處裡本身已是 1 的格子，我們將填充 `grid[i][j]` 表示該點“離最近的 thief 的距離 + 1”

然後透過 binary search 去夾這個 safeness factor。假設是 d，那我們就會嘗試找一條從左上到右下的 path，使得該路徑不能包含有 `grid[i][j] <= d` 的格子，再走一次 BFS 即可判斷，然後根據結果不斷調整 d 的值直到收斂。
