## 2401. Longest Nice Subarray

本題的本質就是找一個最長區間，使得這個區間內每個 bit 位上最多只出現一個 1，這其實和 3. Longest Substring Without Repeating Characters 是一樣的思想。


我們可以開一個長度為 32 的陣列來記錄每個 bit 位上的 1 的個數，但更妙的做法是用一個二進位數 count 本身來記錄。count 的每個 bit 可以記錄該位置出現了 0 次或是 1 次的 1。只要 `count & nums[j] === 0`，就意味著沒有任何一個 bit 位置上的 1 出現超過一次，於是滑窗的右邊界就可以往右移動。反之，就代表無法右移，此時 `[i:j-1]` 就是以 `i` 為開頭的最長區間。接下來只要移動左端點 `i`，將 `nums[i]` 從 `count` 中移除即可。
