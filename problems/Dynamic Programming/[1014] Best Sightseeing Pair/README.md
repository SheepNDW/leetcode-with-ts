## 1014. Best Sightseeing Pair

給定一個陣列 values，表示每個景點的價值，陣列索引表示景點的位置。要求選擇兩個不同景點 i 和 j (`i<j`)，使以下公式的結果最大化：

$Score(i,j)=values[i]+values[j]+i−j$

我們可以初始一個最大值 res 和潛在的最大值 `curMax = values[0] - 1`，選定第一個景點，然後向右遍歷陣列，所以先減去距離 1，然後我們每向右移動一步，就將目前的 `curMax + values[i]` 與 `res` 比較，如果大於 `res`，就更新 `res`。同時也要看 `curMax` 是否需要更新，如果 `Math.max(curMax - 1, values[i] - 1)`。
