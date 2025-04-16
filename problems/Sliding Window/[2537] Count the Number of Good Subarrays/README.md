## 2537. Count the Number of Good Subarrays

對於每個子陣列，若其中存在至少 k 組滿足 `i < j` 且 `nums[i] == nums[j]` 的配對 `(i, j)`，則該子陣列被稱為 好子陣列（Good Subarray）。

每個數字出現 f 次時，能形成的 pair 數量為：

$$
\text{pair count} = \frac{f(f-1)}{2}
$$

也可以透過每次加入新元素時直接加上 `f`（目前已有的次數），來即時更新 pair 總數。

我們用一個 sliding window 來遍歷整個陣列：

每當右邊界 `j` 向右移動時，將 `nums[j]` 加入 map 中，並更新目前的 pair 數量 `count`。

當前的 pair 數量 `count` 大於等於 `k` 時，代表從 `i` 到 `j` 的子陣列都是好子陣列。而如果 `[i...j]` 是好子陣列，則 `[i...j+1]` ... `[i...n-1]` 也都是好子陣列，因此可以直接加上從 `j` 到 `n-1` 的所有子陣列數量 `n - j`。

接著，將左邊界 `i` 往右移動，並更新 pair 的數量和 map 中的數字出現次數。
