## 3439. Reschedule Meetings for Maximum Free Time I

調整 `k` 場會議，最大能夠合併 `k+1` 個 gap，形成一個大的連續空閒時間。

我們使用 sliding window 的方式，每次涵蓋連續 `k` 場會議，並在移動時維護「會議總時間」與兩側邊界。每次移動都去檢查將目前的 `k` 場會議移開後，能否合併出更大的空閒時間。

準備一個變數 `t` 動態記錄目前視窗內 `k` 場會議所需要的總時間，然後定義 `left` 與 `right` 分別為左右邊界，每次計算 `res = Math.max(res, right - left - t)`。
