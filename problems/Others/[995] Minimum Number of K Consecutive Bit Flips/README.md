## 995. Minimum Number of K Consecutive Bit Flips

最佳策略是從前往後掃過去，如過目前的 `nums[i]` 是 1 那就跳過，如果是 0 就翻轉 `nums[i]`，同時要一起翻轉 `nums[i + 1] ~ nums[i + k - 1]`。這樣一路查下去看最後 k 個數是否都是 1。這樣一來一個 $O(nk)$ 的解法就出來了。

但是題目的資料量有 10 的五次方，顯然這樣寫會 TLE，因為我們每當 `nums[i]` 需要翻轉時，我們還需要透過一個迴圈去逐個翻轉 `nums[i + 1] ~ nums[i + k - 1]`，效率很差。

一個最簡單的改進策略就是用差分陣列 `diff[j]` 紀錄：`nums[j]` 經歷的翻轉次數要比 `nums[j-1]` 經歷的翻轉次數多多少。

### 差分陣列的基本概念

差分陣列 `diff` 是用來記錄相鄰元素之間的變化量。在這題中，`diff[j]` 用來表示 `nums[j]` 比 `nums[j-1]` 多經歷的翻轉次數。

* 翻轉次數（flips）：表示到當前元素為止，這個位置總共經歷了多少次翻轉。
* 差分陣列（diff）：用來記錄翻轉次數在不同位置上的變化。它不記錄具體的翻轉次數，而是記錄「變化量」。

假設我們在位置 `i` 開始進行一次 `k` 長度的翻轉，則 `nums[i]` 到 `nums[i+k-1]` 這些位置的元素會被翻轉一次。

為了記錄這個影響，我們在差分陣列 `diff` 中：
1. 將 `diff[i+1]` 增加 1，表示從 `i+1` 開始，翻轉次數增加 1。
2.  將 `diff[i+k]` 減少 1，表示從 `i+k` 開始，翻轉次數應該恢復到原來的數值。

當我們遍歷到某個位置 `j` 時，我們累加 `flips`，即 `flips += diff[j]`。這樣就能夠快速計算出 `nums[j]` 所經歷的總翻轉次數。

### 舉例說明

假設我們有一個陣列 `nums = [0,0,0,1,0,1,1,0], k = 3`。我們來看這個差分陣列的變化過程：

初始狀態：`diff = [0, 0, 0, 0, 0, 0, 0, 0, 0]`（多一個位置是為了方便處理範圍外的操作）

1. 遍歷到 `i = 0`：
   * `flips = flips + diff[0] = 0`
   * `nums[0] + (flips % 2) = 0 + (0 % 2) = 0`，需要翻轉。
   * 翻轉 `nums[0] ~ nums[2]`，更新 `diff[1] += 1`，`diff[3] -= 1`。
   * `diff = [0, 1, 0, -1, 0, 0, 0, 0, 0]`
   * 進行一次翻轉，`count += 1`。

2. 遍歷到 `i = 1`：
   * `flips = flips + diff[1] = 1`
   * `nums[1] + (flips % 2) = 0 + (1 % 2) = 1`，不需要翻轉。
   * `diff = [0, 1, 0, -1, 0, 0, 0, 0, 0]`

3. 遍歷到 `i = 2`：
   * `flips = flips + diff[2] = 1`
   * `nums[2] + (flips % 2) = 0 + (1 % 2) = 1`，不需要翻轉。
   * `diff = [0, 1, 0, -1, 0, 0, 0, 0, 0]`

4. 遍歷到 `i = 3`：
   * `flips = flips + diff[3] = 0`
   * `nums[3] + (flips % 2) = 1 + (0 % 2) = 1`，不需要翻轉。
   * `diff = [0, 1, 0, -1, 0, 0, 0, 0, 0]`

5. 遍歷到 `i = 4`：
   * `flips = flips + diff[4] = 0`
   * `nums[4] + (flips % 2) = 0 + (0 % 2) = 0`，需要翻轉。
   * 翻轉 `nums[4] ~ nums[6]`，更新 `diff[5] += 1`，`diff[7] -= 1`。
   * `diff = [0, 1, 0, -1, 0, 1, 0, -1, 0]`
   * 進行一次翻轉，`count += 1`。

6. 遍歷到 `i = 5`：
   * `flips = flips + diff[5] = 1`
   * `nums[5] + (flips % 2) = 1 + (1 % 2) = 2`，需要翻轉。
   * 翻轉 `nums[5] ~ nums[7]`，更新 `diff[6] += 1`，`diff[8] -= 1`。
   * `diff = [0, 1, 0, -1, 0, 1, 1, -1, -1]`

7. 遍歷到 `i = 6`：
   * `flips = flips + diff[6] = 2`
   * `nums[6] + (flips % 2) = 1 + (2 % 2) = 1`，不需要翻轉。
   * `diff = [0, 1, 0, -1, 0, 1, 1, -1, -1]`

8. 遍歷到 `i = 7`：
   * `flips = flips + diff[7] = 1`
   * `nums[7] + (flips % 2) = 0 + (1 % 2) = 1`，不需要翻轉。

總共進行了 2 次翻轉。