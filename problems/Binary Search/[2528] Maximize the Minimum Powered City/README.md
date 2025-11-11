## 2528. Maximize the Minimum Powered City

假設 the minimum power of a city 是 `target`，那就意味著每個城市可以至少得到 `target` 的 power。我們順著走過每個城市，看在視窗 `[i - r, i + r]` 內的城市總 power 是否至少為 `target`。如果 window 內的 power 不足，我們可以貪心地在視窗的右邊界 `i + r` 增加 power，直到視窗內的 power 達到 `target` 為止。這樣做可以確保我們在當前城市達到目標 power 的同時，盡可能保留更多的 power 給後續的城市使用。

我們可以使用 binary search 來猜測 `target` 的值，如果需要補充的 power 值小於等於 `k`，那就表示我們可以達到這個 `target`，可以嘗試猜測一個更大的值；反之則嘗試猜測一個更小的值。
