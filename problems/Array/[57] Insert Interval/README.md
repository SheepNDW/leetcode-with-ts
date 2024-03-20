## 57. Insert Interval

將 `intervals` 遍歷一遍，會依序遇到三個情況：

1. `intervals[i]` 整個區間都在 `newInterval` 之前，直接將整個區間 push 到 result
2. `intervals[i]` 和 `newInterval` 有交集，則與其合併成新的 `newInterval`，合併可能有若干次：

```ts
while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
  newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
  newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
  i++;
}
```

3. `intervals[i]` 整個區間都在 `newInterval` 之後，將經過合併後的 `newInterval` 加到 result，然後將剩下還未遍歷的 `intervals[i]` 也都 push 進 result
