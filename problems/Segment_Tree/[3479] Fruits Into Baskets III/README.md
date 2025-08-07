## 3479. Fruits Into Baskets III

題目需求
- **輸入**  
  - `fruits: number[]`，長度 n，`fruits[i]` 表示第 i 類水果的數量  
  - `baskets: number[]`，長度 n，`baskets[j]` 表示第 j 個籃子的容量  
- **規則**  
  1. 依序遍歷 `fruits` 陣列，每取一個 `f = fruits[i]`；  
  2. 在最左邊「未使用」且 `capacity ≥ f` 的籃子放入該水果，並標記該籃子為已用；  
  3. 若找不到符合條件的籃子，該水果視為「未放置」。  
- **輸出**  
  - 回傳最終「未放置」的水果類別數量。

使用 **線段樹（Segment Tree）** 來加速：
1. **查詢**：在所有籃子中，快速找到最左邊第一個容量 ≥ target 的索引（O(log n)）。  
2. **更新**：將已用的籃子容量設為 0，並回溯更新內部節點的「區間最大值」（O(log n)）。  
整體時間複雜度 O(n log n)，可處理 n ≤ 10⁵。

線段樹 (Segment Tree)

1. 節點陣列大小
- 使用 `segNode = new Array(4*n + 7)`，確保完全二元樹（1-indexed）有足夠空間。

2. 建樹 (build)
```ts
private build(p: number, l: number, r: number): void {
  if (l === r) {
    // 葉節點：對應 baskets[l]
    this.segNode[p] = this.baskets[l];
    return;
  }
  const mid = Math.floor((l + r) / 2);
  // 左子樹 [l, mid]
  this.build(p*2, l, mid);
  // 右子樹 [mid+1, r]
  this.build(p*2+1, mid+1, r);
  // 內部節點：取左右子樹最大值
  this.segNode[p] = Math.max(
    this.segNode[p*2],
    this.segNode[p*2+1]
  );
}
```

3. 查詢最左側第一個 ≥ target (`queryFirst`)

```ts
queryFirst(p: number, l: number, r: number, target: number): number {
  // 如果這區間最大值都 < target，直接剪枝
  if (this.segNode[p] < target) return -1;
  // 到葉節點，l===r，即為答案
  if (l === r) return l;

  const mid = Math.floor((l + r) / 2);
  // 優先往左子樹找
  if (this.segNode[p*2] >= target) {
    return this.queryFirst(p*2, l, mid, target);
  }
  // 左子樹不夠，再往右
  return this.queryFirst(p*2+1, mid+1, r, target);
}
```

4. 單點更新 (`update`)

```ts
update(p: number, l: number, r: number, idx: number, val: number) {
  // 找到葉節點
  if (l === r) {
    this.segNode[p] = val;
    return;
  }

  const mid = Math.floor((l + r) / 2);
  if (idx <= mid) {
    this.update(p * 2, l, mid, idx, val);
  } else {
    this.update(p * 2 + 1, mid + 1, r, idx, val);
  }

  // 更新內部節點
  this.segNode[p] = Math.max(
    this.segNode[p*2],
    this.segNode[p*2+1]
  );
}
```
