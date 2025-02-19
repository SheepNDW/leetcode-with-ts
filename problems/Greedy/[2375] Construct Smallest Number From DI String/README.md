## 2375. Construct Smallest Number From DI String

必須將儘量小的字元放在前面使用。我們將pattern前加上一個“I”，這樣 pattern 的長度就與字串相等。我們發現，將每個 “IDD...D” 視作一個 section，那麼後一個 section 必然要完全高於前一個 section。我們虛擬地令當前的最大字元是 0，然後把後續整個字串的相對走勢都表達出來後（必然都大於0），得到的就是用 1~9 組成的字典序最小的字串。
