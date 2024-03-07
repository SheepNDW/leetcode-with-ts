## 141. Linked List Cycle

最直觀的解法就是直接用一個 `Set` 去記錄每一個節點，當出現重複的就代表有 cycle，時間複雜度為 $O(n)$ 空間複雜度也是 $O(n)$

快慢指針：用兩個 pointer（`fast`, `slow`），一個一次走兩步一個一次走一步，當兩個 pointer 相遇代表有 cycle，如果 `fast` 變成 `null` 代表沒有 cycle。
