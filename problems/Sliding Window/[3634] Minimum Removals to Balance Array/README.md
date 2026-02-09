## 3634. Minimum Removals to Balance Array

將陣列排序後，使用 sliding window 擴展來找到最長的子陣列，最後找到全域最長的子陣列長度，答案就是 `n - 最長子陣列長度`。
