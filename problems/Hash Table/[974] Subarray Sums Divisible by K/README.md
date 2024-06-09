## 974. Subarray Sums Divisible by K

我們考慮右端點在 `i` 位置的話，符合條件的區間的左端點 `j` 在哪裡? 如果我們將區間和轉化為前綴和來看，`sum[i:j]` 能被 `k` 整除的條件就是：`presum[i]` 和 `presum[j-1]` 除以 `k` 的餘數相同。

於是我們用計數器記錄 `i` 之前 `presum` 對 `k` 除的餘數各自出現了多少次。如果 `presum[i]%k=r`，那麼 `count[r]` 就意味著有多少個位置 `j` 能配對成符合條件的區間。
