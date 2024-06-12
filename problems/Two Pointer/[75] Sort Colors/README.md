## 75. Sort Colors

本題難點在於 in-place 加上 one pass。基本思想是設置三個指標：

```ts
let left = 0;
let mid = 0;
let right = nums.length - 1;
```

遍歷 `mid` 直到 `mid` 超過 `right` 為止，並根據 `nums[mid]` 的值來決定如何移動指標：

1. 遇到 `2`，則將 `nums[mid]` 與 `nums[right]` 交換，並將 `right` 向左移動一位。
2. 遇到 `1`，則繼續前進。
3. 遇到 `0`，則將 `nums[mid]` 與 `nums[left]` 交換，並將 `left` 與 `mid` 向右移動一位。

需要理解的地方是遇到 `0` 時，因為 `left` 和 `mid` 起始位置相同，當它們出現異位時是因為出現了 `1`，所以當 `left` 和 `mid` 交換時，`left` 傳給 `mid` 的值一定是 `1`，所以 `mid` 可以繼續前進。

例如：

```
[2, 0, 2, 1, 1, 0]
 l              r
 m

[0, 0, 2, 1, 1, 2]
 l           r <-  
 m

[0, 0, 2, 1, 1, 2]
->  l        r
->  m

[0, 0, 2, 1, 1, 2]
    -> l     r
    -> m

[0, 0, 1, 1, 2, 2]
       l  r <-
       m

[0, 0, 1, 1, 2, 2]
          r
       l
       -> m
```
