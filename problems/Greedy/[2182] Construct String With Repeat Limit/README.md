## 2182. Construct String With Repeat Limit

很直觀的 Greedy 策略，統計所有字母出現的次數，然後按照字典序從大到小放入 pq 中，然後會有三種情況：

1. 最大的字母的數量小於或等於 repeatLimit，那就將其全部取出。
2. 最大的字母的數量大於 repeatLimit，那就取出 repeatLimit 個，同時取次大的字母一個。然後把最大的字母和次大的字母（如果還有的話）放回 pq 中。
3. 最大的字母的數量大於 repeatLimit，那就取出 repeatLimit 個，此時如果 pq 裡沒有下一個字母，那就直接結束。
