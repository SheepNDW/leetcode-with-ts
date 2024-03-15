## 930. Binary Subarrays With Sum

* prefix + hash

```
X X [i X X j] X X X
```

遍歷每一個元素 `j`，思考以 `j` 當結尾滿足條件的 subarray，如果滿足條件的起點 `i` 有多種可能，那答案就可以累加這麼多。

要確定 `i` 的位置可以使用 prefix sum 來處理，即 `sum[i:j] = prefix[j] - prefix[i - 1]`。這個 `sum[i:j]` 就是 `goal`，固定 `j` 時，`prefix[j]` 會是已知的，因此就可以得到期望的 `prefix[i - 1]` 是多少，假設為 `sum`，我們可以用 hash 來存某個所有 prefix sum 為 `val` 所對應的 `i` 的個數。最後可以得出下面的計算公式：

```ts
ans += Hash[prefix[j] - goal];
```

在初始化雜湊表時，要先將 prefix sum 為 `0` 的次數設為 `1`，這表示還沒有元素被加入前的基礎狀態。這是因為如果一個子陣列的和剛好是 `goal`，那麼從開頭到這個子陣列終點的前綴和減去 `goal` 等於 `0`，應該記為一種有效情況。

* sliding window

左邊界為 `i`，往右移動 `j` 直到視窗內的元素和剛好是 `goal`。此時如果知道 `j` 右側有 `k` 個連續的 `0`，那就代表以 `i` 為左邊界元素和為 `goal` 的視窗有 `k+1` 個。

可以預先計算出每個元素後面有多少個連續 0。
