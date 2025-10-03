## 946. Validate Stack Sequences

給兩個長度相同且為 `1..n` permutation 的陣列 `pushed`、`popped`。判斷是否存在一個「將 pushed 依序壓入、期間可隨時彈出」的過程，能剛好得到 popped 之順序。

我們只要依序將 `pushed` 的元素壓入 stack，並在每次壓入後檢查 stack 頂端是否等於 `popped` 的下一個元素，若相等則彈出 stack 頂端並移動 `popped` 的指標。最後若 stack 為空，表示存在這樣的壓入/彈出過程。
