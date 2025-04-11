## 2843. Count Symmetric Integers

我們要從 `low` 到 `high` 掃過每個整數 `i`，判斷其「前半部分的位數總和」是否等於「後半部分的位數總和」。

比較直接的做法就是將 `i` 轉成字串，然後取前半部分和後半部分將各位字元轉為數字後相加，然後比較兩者是否相等。

不過可以嘗試看看數學的方式不將 `i` 轉成字串：

* 用一個 buffer 陣列存下每一位上的數字
* 每次取 `i % 10`（取得個位數）後 push 到 buffer
* 再執行 `i = Math.floor(i / 10)` 將該位移除
* 最後比較左右一半的數字和是否相等

```ts
const buffer = new Array(5).fill(0);
let n = 0;

while (i > 0) {
  buffer[n++] = i % 10;
  i = Math.floor(i / 10);
}
```

這樣拆解出來的 `buffer[0]` 是個位數，`buffer[n - 1]` 是最高位。

另外如果想知道一個正整數 `i` 有幾位數，可以用 `Math.log10(i) + 1` 在 `O(1)` 的時間內計算出來。
