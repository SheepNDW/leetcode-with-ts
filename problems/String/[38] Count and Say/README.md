## 38. Count and Say

此題關鍵在於每一項的答案都要根據前項的結果推導而來，最直接的做法就是從 `'1'` 開始一路往下建構，直到第 n 項。

在解題時我們設計一個輔助函式 `describe`，`describe` 的目的是根據一個字串（例如 `'1211'`）輸出其描述（例如 `'111221'`）。透過遍歷每個字元、計數連續出現的次數，遇到不同字元就組出「次數 + 字元」並加到結果中。

然後就只要從第二項開始不斷呼叫 `describe`，直到第 n 項為止。

```ts
function countAndSay(n: number): string {
  let res = '1';

  for (let i = 1; i < n; i++) {
    res = describe(res);
  }

  return res;
}
```
