## 2064. Minimized Maximum of Products Distributed to Any Store

不想讓單個 store 存放太多物品，就只能把單一物品分散在多個 store，但總 store 數是有限的，所以就要允許讓每個 store 存更多物品。因此，使用 binary search 是一個顯而易見的解法。

我們嘗試每個 store 存放物品數量的上限 k，那麼對於每一種物品，我們就可以計算出需要多少個 store 來存放。如果總 store 數量不夠，就表示 k 太小，反之則表示 k 太大。最後，就可以找到最小的 k。
