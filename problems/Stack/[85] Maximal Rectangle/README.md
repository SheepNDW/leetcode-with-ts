## 85. Maximal Rectangle  

這題是 84 題的二維擴展，轉化為求 maximal histgram

```ts
for (let i = 0; i < m; i++) { // 遍歷 histgram 底列的位置。注意：不需要遍歷 histgram 的頂列位置
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] == '1') {
      hist[j] = hist[j] + 1;
    } else {
      hist[j] = 0;
    }
  }
}
```
