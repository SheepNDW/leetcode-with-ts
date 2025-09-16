## 235. Lowest Common Ancestor of a Binary Search Tree

從根節點開始檢查，如果目前節點 `node` 的值比 `p` 和 `q` 的值都大，表示 `p` 和 `q` 都在 `node` 的左子樹中，因此繼續往左子樹尋找；如果 `node` 的值比 `p` 和 `q` 的值都小，表示 `p` 和 `q` 都在 `node` 的右子樹中，因此繼續往右子樹尋找；直到我們發現 `node` 的值介於 `p` 和 `q` 的值之間，這表示我們找到了 `p` 和 `q` 的最近公共祖先。
