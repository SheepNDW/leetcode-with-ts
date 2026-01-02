## 1970. Last Day Where You Can Still Cross

這題的題意是給你一個 `row x col` 的矩陣，然後每天會有一個格子被水淹沒，問你最晚是哪一天你還能從上方走到下方。

比較直接暴力的解法是用 binary search + BFS，每次猜一個天數 `mid`，然後把前 `mid` 天被淹沒的格子標記起來，接著從上方所有沒被淹沒的格子開始做 BFS，看看能不能走到下方。如果能走到下方代表 `mid` 天是可以通過的，那麼就繼續猜更晚的天數；反之則猜更早的天數。

```ts
const n = cells.length;
let left = 0;
let right = n + 1;

while (left < right) {
  const mid = (left + right) >> 1;

  if (canCross(mid)) {
    left = mid + 1;
  } else {
    right = mid;
  }
}

// left is the first day we cannot cross
return left - 1;
```

在判斷是否能通過的時候，比較好的做法是用 multi-source BFS，從上方所有沒被淹沒的格子開始做 BFS，這樣可以減少重複走訪的次數。

### Union-Find

這題可以用 Union-Find 來解，思路是從最後一天開始往前走，每天把被淹沒的格子「復原」成陸地，然後把它跟相鄰的陸地做 union，此時檢查第一列和最後一列是否有格子是連通的，如果是的話代表有一條路可以從 top 走到 bottom。

但是我們發現，每一次都要檢查任意兩個 top 和 bottom 的格子是否連通，會花掉很多時間。為了解決這個問題，我們可以新增兩個虛擬節點 `top` 和 `bottom`，分別跟第一列和最後一列的陸地做 union，這樣我們只需要檢查 `top` 和 `bottom` 這兩個虛擬節點是否連通就可以了。

#### 實作細節：

在實作時把二維點座標轉成一維索引會比較方便，轉換公式是 `index = row * col + column`。

想像有一個書架：每一列（row）是一層，每一欄（col）是一個書位。把每一列串成一條長條：

```txt
第0列: [0][0] [0][1] [0][2] ... [0][col-1]
第1列: [1][0] [1][1] [1][2] ... [1][col-1]
第2列: [2][0] [2][1] [2][2] ... [2][col-1]
...
```

已知前面已經有 `row * col` 本書，再加上目前這一列的第幾本就可以得出該書的索引。

所以常見的公式就會是 `index = r * col + c`，其中 `r` 是列號，`c` 是欄號，`col` 是總欄數。
