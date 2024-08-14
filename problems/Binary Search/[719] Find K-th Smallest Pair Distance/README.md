## 719. Find K-th Smallest Pair Distance

對於能夠明顯判斷出上下邊界的題目，用二分法的思想往往非常巧妙。

在本題中，將nums排序後，最大的差值是 `nums[n-1]-nums[0]`；最小的差值必定存在於相鄰的兩個元素之間，也很容易算出來（或簡單直接使用 0）。

於是相當於我們知道了差值的左邊界 left，右邊界 right，需要找一個居於中間的數 mid，使得差值小於等於 mid 的 pair 數目正好是 k 個。

接下來就是在二分法的框架中去遍歷每個元素，然後找出第一個差大於 mid 的位置：

```ts
for (let i = 0; i < n; i++) {
  const pos = upperBound(nums, nums[i] + mid); // 也可以用 two pointer
  count += pos - i - 1; // 值小於等於 nums[i]+mid 的元素的個數
}
```
