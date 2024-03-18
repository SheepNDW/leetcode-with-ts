## 525. Contiguous Array

求最長連續 subarray 且 `0`、`1` 數量相等，可以把它當成一個 prefix sum 問題，遍歷所有元素，遇到 `1` 就加 1 遇到 `0` 就減 1，如果兩個位置的 prefix sum 相等，就代表中間的元素和為 0，也就是有相同數目的 1 和 0。

```
X X X [X X X X X] => prefix[i] - prefix[j - 1]
       j       i
```

建立一個 hash map 去記錄 prefix sum 出現的位置，因為是求最大長度，只需要存第一次出現的位置就好，另外還需考慮第一個位置，因為有可能區間是從第一個開始：

```
 X [X X X X X X X] => prefix[i] - prefix[-1]
-1  0           i
```
