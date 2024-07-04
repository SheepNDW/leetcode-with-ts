## 1509. Minimum Difference Between Largest and Smallest Value in Three Moves

可以想成從 `nums` 中移除 3 個數字，使最大最小值的差最小，直觀的想法就是將陣列排序，然後用兩個指標指向頭尾進行調整。

1, 3, 4, 6, 8, 9, 13, 15
l           r

left 從 0 ~ 4 代表從左側刪 0 個到刪 3 個
right 就是 nums.length - 4 + left 代表從刪掉最右三個開始

最後紀錄最小的頭尾差就是答案。
