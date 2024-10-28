## 1233. Remove Sub-Folders from the Filesystem

解法1：sorting

將資料夾根據字典順序進行排序，這樣父資料夾總是會出現在子資料夾之前，然後從頭掃過一遍當目前路徑的前綴和上一次保留的路徑一致時，跳過該路徑，否則將其加入結果中。

```ts
for (let i = 1; i < folder.length; i++) {
  let prev = res[res.length - 1];
  prev += '/';

  if (!folder[i].startsWith(prev)) {
    res.push(folder[i]);
  }
}
```

解法2：Trie

另外一種解法是利用 Trie（字典樹）結構，將每個資料夾路徑插入到字典樹中，同時確保當插入一個資料夾時，若它的父資料夾已經存在於字典樹中，則直接跳過該資料夾，因為這代表它是子資料夾。

Trie 節點結構：每個節點代表一個資料夾名稱，每個節點可能有多個子節點，表示下一層資料夾。可以用一個物件來代表 Trie 結構。

```ts
class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEnd: boolean = false;
}
```

透過兩次遍歷，第一次將所有資料夾路徑插入到 Trie 中，每個路徑的終點都標記 `isEnd = true` 表示該資料夾結束。

第二次遍歷時，將每個路徑分層次在 Trie 中逐層比對，並在每一層檢查是否遇到 `isEnd = true` 的父資料夾，若遇到 `isEnd = true`，且當前層並非路徑的最後一層，說明該路徑是子資料夾，標記 `isSub = true` 並停止檢查。
