## 2816. Double a Number Represented as a Linked List

Key：

1. list 不包含任何負整數或任何前導零
2. 加倍後可能會超過 9，在這種情況下，我們需要將多餘的數字轉移到下一個節點並將其容納在答案中

解法 1：Reverse List

先將整個串列反轉，從最低位開始處理數字加倍。

加倍原理：

* 遍歷串列，每個節點值乘以 2 同時加上前一位的進位（如果有）
* 計算目前節點值乘以 2 的結果，更新節點值為結果的個位數，計算進位（除以 10 的商）
* 如果達到串列終點且仍有進位，則需要再串列末位新增一個節點存放進位

最後再反轉一次串列就是答案

解法 2：Single Pointer

判斷目前遍歷的節點值是否大於 4，來決定要不要進位，如果頭節點的值大於 4，則在 list 開頭插入一個值為 0 的新節點，然後開始遍歷每個節點，將目前節點的值加倍並用個位更新。如果 cur 節點有下一個節點且下一個節點的值大於4，增加當前節點的值以處理進位。
