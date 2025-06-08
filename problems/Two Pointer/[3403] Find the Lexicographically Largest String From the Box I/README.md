## 3403. Find the Lexicographically Largest String From the Box I

我們的目標是找出 word 中字典序最大的子字串，長度最多為 `maxLen = word.length - numFriends + 1`。

想找一個最左邊的子字串，讓它的字典序最大。假設你現在有兩個位置 `i` 和 `j`（`i < j`）：
* `word.slice(i)` 與 `word.slice(j)` 誰比較大？
* 如果 `word.slice(i)` 較小，那我們就應該捨棄 `i`，因為以後更不可能成為最大字串的起點。

我們宣告三個變數：

* `i`：目前的「最大字串起點」
* `j`：下一個候選者
* `k`：目前比較的位置偏移量

逐步比較 `word[i + k]` 和 `word[j + k]`：

1. 字元相同：

```ts
if (word[i + k] === word[j + k]) {
  k++; // 繼續往右比較
}
```

2. `word[i + k] > word[j + k]`：

說明從 `i` 開始的子字串較大，捨棄 `j`，因此

```ts
j = j + k + 1 // 往右跳至下一個候選者
k = 0 // 重置偏移量
``` 

3. `word[i + k] < word[j + k]`： 

說明從 `j` 開始的子字串較大，捨棄 `i`，因此

```ts
i = Math.max(i + k + 1, j) // 避免 i 和 j 重疊
j = i + 1
k = 0
```
