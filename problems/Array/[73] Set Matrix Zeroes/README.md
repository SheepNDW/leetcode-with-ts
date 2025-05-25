## 73. Set Matrix Zeroes

給定一個 `m x n` 的二維陣列 `matrix`，若其中某個元素為 0，則將其所在的整列與整欄的所有元素都設為 0。要求是就地（in-place）修改輸入的陣列。


### 方法一：額外空間 O(m+n)

最直覺的做法是使用兩個陣列 `row` 和 `col`，分別記錄哪些列與欄需要被設為 0。

步驟如下：

1. 遍歷整個矩陣，當 `matrix[i][j] === 0` 時，將 `row[i]` 與 `col[j]` 記為需要清零。
2. 再次遍歷，將 `row[i] === 1` 或 `col[j] === 1` 的位置設為 0。

此方法雖然邏輯簡單，但空間複雜度為 `O(m+n)`，無法達到題目最佳要求。


### 方法二：最佳解，空間 O(1)

我們可以利用原本矩陣的第一列與第一欄來記錄這些「標記」，這樣就不需要額外的空間來存儲 row 和 col 了。具體做法如下：

1. 首先需要判斷第一列和第一行是否需要被設置為 0：

```ts
let firstRowZero = false;
let firstColZero = false;

for (let i = 0; i < m; i++) {
  if (matrix[i][0] === 0) firstColZero = true;
}

for (let j = 0; j < n; j++) {
  if (matrix[0][j] === 0) firstRowZero = true;
}
```

2. 接下來從 `matrix[1][1]` 開始遍歷，如果 `matrix[i][j]` 為 0，則將 `matrix[i][0]` 和 `matrix[0][j]` 設置為 0，表示這 row 和 col 未來需要被設置為 0。
3. 再次遍歷， `matrix[1..m-1][1..n-1]`，然後根據標記決定是否將 `matrix[i][j]` 設置為 0
4. 處理第一列和第一欄。

```ts
if (firstRowZero) {
  for (let j = 0; j < n; j++) matrix[0][j] = 0;
}

if (firstColZero) {
  for (let i = 0; i < m; i++) matrix[i][0] = 0;
}
```
