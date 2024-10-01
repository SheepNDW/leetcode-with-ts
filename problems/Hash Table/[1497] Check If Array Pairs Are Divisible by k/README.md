## 1497. Check If Array Pairs Are Divisible by k

當 `arr[i] % k = x`，那麼你需要找到另一個數 `arr[j]` 使得 `arr[j] % k = k - x`。這樣兩個數字的和 (`arr[i] + arr[j]`) 的餘數會是 `0`，表示它們的和能被 `k` 整除。

特例：如果餘數 `x == 0` 或 `x == k / 2`（當 `k` 是偶數時），這些餘數的數字只能和自己配對，所以它們的出現次數必須是偶數。
