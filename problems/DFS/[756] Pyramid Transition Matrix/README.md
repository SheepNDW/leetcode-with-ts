## 756. Pyramid Transition Matrix

給定金字塔底層字串 bottom，以及若干規則 allowed（每條長度 3，例如 "ABC"），表示若下一層相鄰兩格是 "AB"，則上一層對應位置可以放 "C"。
問：是否存在至少一種堆疊方式，使得最終能堆到頂層只剩 1 個字母。

#### 核心觀察

1. 每一層會比下一層少 1 格：len -> len-1 -> ... -> 1
2. 上一層每個位置只依賴下一層的相鄰兩個字母（pair）。
3. pair 可能對應多個上層字母，因此需要嘗試所有可能組合 → DFS/回溯。

為了避免每次查規則都掃過 allowed，先把 allowed 預處理成：
* `Map<string, string[]>`
* `key`：底層相鄰兩字母，例如 "AB"
* `value`：所有可能放在上方的字母清單，例如 ["C","D"]

這樣在 DFS 裡查詢 pair 的候選字母就能快速取得。

#### 狀態定義

`dfs(row: string): boolean`

表示：從目前這一層 row 出發，能否一路堆到頂（長度 1）？
* Base case：`row.length === 1` → 成功到頂 → true
* 否則要構造上一層 nextRow（長度 `row.length - 1`），只要存在任何一個 nextRow 使 `dfs(nextRow)` 成功，則 `dfs(row)=true`

回溯如何組出 nextRow

對於 row 長度為 `n`：
* nextRow 長度為 `n-1`
* 第 i 格由 `row[i] + row[i+1]` 決定

用 `backtrack(index)` 逐格填入 `next[index]`：
* 若 `index === row.length - 1`：代表 `nextRow` 已組完 → 呼叫 `dfs(nextRow)`
* 否則取得 pair 的所有候選字母 `candidates`，逐一嘗試：
* 設定 `next[index] = ch`
* 遞迴 `backtrack(index+1)`
* 只要有一個成功就提前回傳 true

剪枝：pair 不存在規則就直接失敗

在組 nextRow 前先檢查：

只要 row 中有任何相鄰 pair 不存在於 allowedMap，那就不可能組出完整上一層，直接 false。

這能避免不必要的回溯分支。

#### 記憶化（Memoization）

同一個 row 可能由不同路徑生成，但「row 能否到頂」答案固定。
所以用 `memo: Map<string, boolean>` 記錄 `dfs(row)` 結果，避免重複爆搜。
* memo.has(row) → 直接回傳
* 計算後 memo.set(row, result)
