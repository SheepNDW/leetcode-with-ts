## 1123. Lowest Common Ancestor of Deepest Leaves

這題和 865 一模一樣，我們可以用兩次 DFS 來解決這個問題。

提前遍歷整棵樹做預處理，記錄整棵樹最深的深度 `maxDepth`，以及總共有多少個深度為 `maxDepth` 的節點 `deepCount`。

接著第二次遍歷整棵樹，從下往上看每個節點包含多少個深度為 `maxDepth` 的節點，當找到第一個數目是 `deepCount` 的節點時，說明他的子樹下面包含了所有最深的節點，這個節點就是我們要找的答案。
