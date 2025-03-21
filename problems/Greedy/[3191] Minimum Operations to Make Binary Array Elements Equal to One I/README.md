## 3191. Minimum Operations to Make Binary Array Elements Equal to One I

用 Greedy 策略，從左到右掃描陣列，當遇到 `0` 的時候，就翻轉目前索引以及後面兩個索引的值，最後檢查後兩位是否為 `1` 否則就是無解。

翻轉 1/0 可以用 XOR 運算：

```ts
nums[i+1] ^= 1;
nums[i+2] ^= 1;
```

這比直接寫 `nums[i+1] = nums[i+1] ? 0 : 1` 來得簡潔。
