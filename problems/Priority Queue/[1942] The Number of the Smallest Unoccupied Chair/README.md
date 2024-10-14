## 1942. The Number of the Smallest Unoccupied Chair

我們可以準備兩個 PQ (available, occupied)，available 用來記錄空著的椅子 id，這些椅子 id 會依照小到大的順序一一被佔用，而 occupied 用來記錄已經被佔用的椅子何時會被釋放和這個被佔用的椅子 id。

我們首先將 available 初始化為 0 到 n-1，而 occupied 初始化為空。接著因為題目提到 arrival 不會重複，所以我們可以先記錄 targetFriend 的 arrival，然後將 times 依照 arrival 排序確保我們按照 arrival 的順序來處理。

被分配出去的椅子在使用完畢後會被放回 available，所以我們需要把所有使用中的椅子放入一個按照結束時間排序的 PQ(occupied)，每次在 available 分配椅子之前，先檢查目前時刻是否有椅子可以被釋放，如果有的話，就將這個椅子放回 available 然後再從 available 中取出一個最小的 ID 分配給下一個人。

