## 921. Minimum Add to Make Parentheses Valid

這題關注的是不平衡的括號數量，以及確保每個左括號有對應的右括號。

用 greedy 策略比較容易理解，我們維護一個計數器 `openCount` 表示目前為止未被配對的左括號數量，以及一個計數器 `unbalanced` 來表示無法配對的右括號數量。

舉個例子：`s =  (()))((`

我們從左到右掃描，遇到左括號就把 `openCount` 加一，遇到右括號就把 `openCount` 減一，如果 `openCount` 等於零，就把 `unbalanced` 加一。

假設我們掃到 `((` 的時候，`openCount` 為 2，此時繼續往下掃，遇到 `))` 的時候，`openCount` 會變成 0，此時都是配對的，然後繼續往下掃，又遇到 `)`，此時因為沒有左括號可以配對，所以 `unbalanced` 加一......直到最後我們會得到 `openCount = 2` 以及 `unbalanced = 2`，這就是需要補上的括號數量。
