## 3484. Design Spreadsheet

實作一個簡化版試算表 `Spreadsheet`
- 固定 26 欄（A–Z），列數 `rows` 由建構子決定（1-based 對外、0-based 內部）。
- 操作：
  - `setCell(cell, value)`：設定單一格值。
  - `resetCell(cell)`：把格子重設為 0。
  - `getValue(formula)`：計算形如 `=X+Y` 的公式，`X/Y` 各自可為 cell 參照（如 `"B10"`）或 非負整數。未設過的 cell 視為 0。

由於欄固定且列上限不大，採用 2D 陣列 `rows × 26` 即可，column 的轉換可以使用 `charCodeAt` 的差值來快速取得。然後設計一個輔助函式 `parseCell` 來解析 cell 字串，回傳對應的 row/col 索引。
