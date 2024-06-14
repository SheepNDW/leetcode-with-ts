## 560. Subarray Sum Equals K

用一個 hash 紀錄每個 presum 出現的次數，當我們找到 presum - k 出現過的次數時，代表我們找到一個 subarray 的和為 k。

初始化時要將 `0: 1` 加入 hash，這樣才能處理從頭開始的 subarray。
