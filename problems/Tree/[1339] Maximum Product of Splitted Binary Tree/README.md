## 1339. Maximum Product of Splitted Binary Tree

題目給你一棵二元樹，請你切掉一條邊分成兩棵子樹，使得兩棵子樹的節點值總和乘積最大，回傳最大乘積對 `10^9 + 7` 取模的結果。

切掉一條邊等價於：選定某個節點作為子樹根，將它與父節點分離。若該子樹的節點總和為 `sub`，整棵樹總和為 `total`，則分裂後兩棵樹的總和分別為 `sub` 與 `total - sub`，乘積為 `sub * (total - sub)`。

因此我們先做一次 DFS 計算 `total`，再做一次 DFS 計算每個節點的 `sub`，並用 `sub * (total - sub)` 更新最大值。

整體時間複雜度為 `O(n)`。
