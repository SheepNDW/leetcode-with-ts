## 1552. Magnetic Force Between Two Balls

典型 binary search 找值，猜一個 min force，然後檢查是否能從陣列挑出 `m` 個位置讓這 `m` 個位置之間的距離都大於等於這個 force。如果可以就繼續猜更大的 force，反之就猜更小的。

這題可以套用模板，但要注意的是區間有包含 `right`，所以要將上邊界加一，然後找出的 `left` 會是第一個不符合條件的 force，於是回傳 `left - 1`。
