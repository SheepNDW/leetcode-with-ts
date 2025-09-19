## 3408. Design Task Manager

設計一個任務管理系統 `TaskManager`。初始化時給定一組任務 `tasks`，每筆為 `[userId, taskId, priority]`，代表某使用者的某個任務與其優先權。

系統需支援以下操作：

- `add(userId, taskId, priority)`：新增一個任務。
- `edit(taskId, newPriority)`：將既有任務的優先權改為 `newPriority`。
- `rmv(taskId)`：刪除指定任務。
- `execTop()`：執行並**移除**當前「最高優先權」的任務，回傳其 `userId`；若無任務則回傳 `-1`。  
  - 若多個任務 `priority` 相同，則選 **`taskId` 較大者**。

我們使用兩個主要的資料結構：

1. `tasks: Map<number, { userId: number; priority: number }>`  
   - `taskId -> { userId, priority }`（記錄任務是否仍存在與其最新優先權）
2. `pq: PriorityQueue<{ taskId: number; priority: number }>`  
   - 以 `priority` 由大到小排序，`priority` 相同時 `taskId` 由大到小  
   - 用來在 `execTop` 取得當前理論上的最大者

如同 2353 題，我們一樣使用 lazy deletion。當我們 `edit` 或 `rmv` 時，不嘗試從 `PriorityQueue` 中「精準刪除」舊條目，而是只更新 `Map`（或移除 `Map`），並把新狀態（若有）再丟進 `PriorityQueue`。在 `execTop` 時，持續彈出直到找到與 `Map` 中「當前有效狀態」一致的條目；找到後同時要從 `Map` 刪除，才算把任務真正執行並移除。
