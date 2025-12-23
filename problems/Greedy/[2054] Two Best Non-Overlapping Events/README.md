## 2054. Two Best Non-Overlapping Events

從多個活動區間中，選出最多兩個不重疊（`end < start`）的活動，使得 `value` 總和最大。

#### Step 1：依 `endTime` 排序

```ts
events.sort((a, b) => a[1] - b[1]);
```

* 讓活動依結束時間由小到大排列
* 這樣在處理第 `i` 個活動時，前面的活動都已經「在時間上不晚於它」

#### Step 2：建立 prefix 最大值（`rollingMax`）

```ts
rollingMax[i] = max(events[0..i].value)
```

* `rollingMax[i]` 表示：
  在前 `i` 個活動中，單選一個活動能拿到的最大 `value`
* 用來快速取得「左邊可搭配活動的最佳收益」

#### Step 3：逐一把活動當作「右邊活動」來嘗試搭配

對每個活動 `[start, end, value]`：

##### (1) 處理不重疊條件

```ts
const start = events[i][0] - 1;
```

* 題目要求 `left.end < right.start`
* 改寫成 `left.end <= start - 1`，讓二分搜尋好寫

##### (2) 用 binary search 找可搭配的左邊活動

```ts
pos = upperBound(endTimes, start) - 1
```

* `endTimes`：已處理過的活動的 `endTime`（非遞減）
* 找到最後一個 `endTime <= start`
* 若存在，最佳左邊收益是 `rollingMax[pos]`

##### (3) 更新答案

```ts
res = max(res, value)                  // 只選自己
res = max(res, rollingMax[pos] + value) // 選兩個
```


#### Step 4：更新輔助結構

```ts
endTimes.push(end);
```

* 將目前活動的 `endTime` 加入，供後續活動二分搜尋使用


#### 時間與空間複雜度

* **時間**：`O(n log n)`（排序 + 每個活動一次 binary search）
* **空間**：`O(n)`（`rollingMax`、`endTimes`）

