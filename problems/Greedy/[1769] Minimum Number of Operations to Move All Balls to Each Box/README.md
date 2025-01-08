## 1769. Minimum Number of Operations to Move All Balls to Each Box

最佳解可以用 $O(n)$ 的複雜度實現，我們令 `leftMoves[i]` 表示將 `i` 左側的球移動過來所需的操作次數，可以導出遞推關係：`leftMoves[i] = leftMoves[i-1] + left[i]`，其中 `left[i]` 表示 `i` 左側的球數。可以理解成兩個步驟，先將 `i-1` 左側所有的球都移動到 `i-1`，然後這些球再移動 1 步到 `i`。而這個 `left[i]` 的遞推關係也很顯而易見：`left[i] = left[i-1] + boxes[i-1]`。

那麼用同樣的邏輯我們還可以求出 `rightMoves[i]`，最終答案就是 `res[i] = leftMoves[i] + rightMoves[i]`。 
