## 236. Lowest Common Ancestor of a Binary Tree

#### 解法 1: 找到各自的完整路徑

我們用 DFS 找到從 root 到 p 和 q 的路徑，然後比較兩條路徑，找到最後一個相同的節點即為最近公共祖先。

DFS 函式會一路向下尋找目標節點，然後我們在回傳的過程中將所經過的節點加入到一個陣列中：

```ts
function dfs(node, target, path) {
  if (node === null) return false;
  if (node === target || dfs(node.left, target, path) || dfs(node.right, target, path)) {
    path.push(node);
    return true;
  }
  return false;
}
```

我們對 p 和 q 都呼叫這個函式，最後再由後往前比較兩個路徑陣列，找到最後一個相同的節點即可。

#### 解法 2: 純遞迴

我們可以定義 `dfs(node)` 這個函式表示為：在以 `node` 為根的子樹中，有多少個目標節點（p 和 q），可能的值為 0、1 或 2。而想當然，只有 `node` 是 p 和 q 的公共祖先時，`dfs(node)` 才會回傳 2。

然後因為 dfs 是從下往上回傳的，所以當 `dfs(node)` 回傳 2 時，表示 `node` 是我們要找的最近公共祖先，我們就把它存起來。
