## 3011. Find if Array Can Be Sorted

只有相鄰且相同的 set bits 可以互換位置，我們只要逐個掃過去，並且用一個變數 `prevMax` 來記錄上一組 set bits 的最大值，然後用 `curMax` 和 `curMin` 來記錄當前組的最大值和最小值，如果 `curMin` 比 `prevMax` 還小，代表無法排序，因為他們之間無法交換。


```
O O  O  |  O  O  O | O
    pM    cm  cM
```

```ts
if (countSetBits(n) === countSetBits(curMin)) {
  curMin = Math.min(curMin, n);
  curMax = Math.max(curMax, n);
} else {
  if (curMin < prevMax) {
    return false;
  }
  prevMax = curMax;
  curMin = n;
  curMax = n;
}
```
