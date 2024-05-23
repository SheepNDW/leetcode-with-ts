## 131. Palindrome Partitioning

* 直接 DFS 列舉所有子字串判斷是否是回文

從 `start` 到 `end` 逐步擴展，對每個可能的切分點，提取子字串 `substring`。接著檢查 `substring` 是否為回文，如果是，則將其加入 `candidate`，並繼續遞迴處理剩餘的字串。

* 使用 DP 預處理字串再 DFS

用區間型 DP 計算出任意兩個 `index` 之間的 `substring` 是否為回文字串，記作 `dp[i][j]`。

然後從第一個字符開始進行深度優先搜尋，設計 `dfs(i)`，表示考慮以目前的位置 `i` 為 `substring` 的開頭，遍歷有哪些位置 `j` 滿足 `[i:j]` 的字串滿足回文（即 `dp[i][j] = true`），就將該字串放進 `candidate`，然後遞迴搜尋第 `j+1` 個位置。如果 `dfs` 的參數 `i` 走到了 `n`，說明恰好將整個 `s` 分割成了若干段回文串，就將這組分割的子串 `candidate` 加入最終答案。

預處理分三個步驟：

1. 初始化單個字符的回文性

```ts
for (let i = 0; i < n; i++) {
  dp[i][i] = true;
}
```

2. 初始化相鄰兩個字符的回文性

```ts
for (let i = 0; i + 1 < n; i++) {
  dp[i][i + 1] = s[i] === s[i + 1];
}
```

3. 處理長度為 3 到 n 的子字串

```ts
for (let len = 3; len <= n; len++) {
  for (let i = 0; i + len - 1 < n; i++) {
    const j = i + len - 1;
    if (s[i] === s[j] && dp[i + 1][j - 1]) {
      dp[i][j] = true;
    } else {
      dp[i][j] = false;
    }
  }
}
```

* `len` 表示子字串的長度，從 3 開始一直到 n
* `i` 是子字串的起始位置
* `j` 是子字串的結束位置，計算方法是 `j = i + len - 1`

對於每一個長度為 `len` 的子字串 `s[i:j]`，判斷其是否為回文的條件是：

1. 其首尾字符相等，即 `s[i] === s[j]`
2. 去掉首尾字符後的子字串 `s[i+1:j-1]` 也是回文，即 `dp[i + 1][j - 1]` 為 `true`
