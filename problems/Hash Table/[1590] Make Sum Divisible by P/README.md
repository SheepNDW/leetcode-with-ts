## 1590. Make Sum Divisible by P

假設整個陣列的和除以 p 的餘數是 r0，題目要求找到一個連續子陣列，其和除以 p 的餘數是 r0，並且這個子陣列的長度要盡量短。

我們的目標是找到最短的子陣列 `[i:j]`，使得它的和除以 p 的餘數等於 r0。

`X X X [i X X X j] X X X`

首先我們要找出 r0 的值，這個值可以透過整個陣列的和除以 p 的餘數得到。如果 r0 等於 0，表示整個陣列的和就是 p 的倍數，那麼我們可以直接回傳 0。

我們要探索這樣的一個 subarray `[i:j]`，令其右邊界為 j，那麼左邊界 i 可以在哪裡呢？我們可以利用前綴和的思想：

另 `presum[j]` 為前 j 個元素的和，那麼 `presum[j] % p == r`，表示在位置 j 的前綴和除以 p 的餘數是 r。為了讓剩餘的陣列和整除 p，我們需要找到一個位置 i，使得 `presum[j] - presum[i-1]` 除以 p 的餘數是 r0。

推導過程為：

```
sum[i:j] = presum[j] - presum[i-1]
sum[i:j] % p = (presum[j] - presum[i-1]) % p
r0 = (presum[j] - presum[i-1]) % p
r0 = r - (presum[i-1] % p)
```

準備一個 map 來記錄前綴和除以 p 的餘數 r，以及對應的位置 i，初始化為 `{0: -1}`，表示沒有移除任何元素的情況下，前綴和除以 p 的餘數是 0。
在遍歷過程中，我們可以得到 `r = presum[j] % p`，然後計算 `dr = presum[i-1] % p = r - r0`（要注意負數的情況），然後查找 map 中是否有對應的 dr，如果有，表示我們找到了一個 subarray `[i:j]`，使得其和除以 p 的餘數是 r0。然後我們可以計算這個 subarray 的長度，並且更新答案。然後將 r 加入 map 中，對應的位置是 j。