## 231. Power of Two

任何 2 的冪次方的數字，在其二進位表示中，都恰好有一位是 1，其餘所有位都是 0。例如：

* $2^0$ = 1: 二進位為 `0001`
* $2^1$ = 2: 二進位為 `0010`
* $2^2$ = 4: 二進位為 `0100`
* $2^3$ = 8: 二進位為 `1000`

當 `n` 是 `2` 的冪次方時，`n - 1` 的二進位表示將會是 `n` 的最高位的 `1` 變為 `0`，並且 `n` 的最高位之後的所有位都變為 `1`。因此，`n & (n - 1)` 的結果會是將 `n` 的唯一的一個 `1` 變為 `0`，從而得到 `0`。

如果 `n = 4`（即 2^2），那麼：

* `n` 的二進位表示為 `0100`
* `n - 1` 的二進位表示為 `0011`
* `n & (n - 1)` 的結果為 `0100 & 0011 = 0000`

最後對於非 `2` 的冪次方的數字，它的二進位表示中會有多於一位的 `1`。在這種情況下，`n & (n - 1)` 不會是 `0`，因為至少有一位的 `1` 不會被消除。