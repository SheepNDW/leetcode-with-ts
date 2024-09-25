## 2416. Sum of Prefix Scores of Strings

典型字典樹的應用，在 build Tree 的時候，我們給每個節點都標記一個 count，表示從 root -> node 的這條路徑是多少個 word 的前綴。在查詢的時候，我們在 Trie 裡遍歷 word 的前綴，所到之處的 count 就是目前前綴的 score 了。
