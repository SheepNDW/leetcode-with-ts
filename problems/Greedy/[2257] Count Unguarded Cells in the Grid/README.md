## 2257. Count Unguarded Cells in the Grid

先建立出 grid，然後將 wall 和 guard 標記上，接下來從每一個 guard 向四個方向掃，直到遇到 wall 或是另外一個 guard。最後統計整個 grid 裡沒有被掃到的格子有多少。
