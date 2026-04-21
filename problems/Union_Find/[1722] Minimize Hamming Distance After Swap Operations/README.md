## 1722. Minimize Hamming Distance After Swap Operations

我們將所有互相連接的 allowedSwap 的位置都 union 起來，這些位置上的數字其實都是可以任意重新排列的。我們只需要將 source 裡這些位置上的元素（視為 multiset）盡量與 target 的對應位置做配對，無法配對的位置數量就是最小 Hamming Distance。
