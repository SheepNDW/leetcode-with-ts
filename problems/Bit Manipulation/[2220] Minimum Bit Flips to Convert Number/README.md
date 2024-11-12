## 2220. Minimum Bit Flips to Convert Number

題目的核心需求：
1. 你需要比較 `start` 和 `goal` 的二進位表示。
2. 找出兩者之間不同的位元數量，因為每個不同的位元都需要進行一次翻轉。
3. 最後回傳最少翻轉次數。

思路：

使用 XOR 運算：當兩個位元相同時，結果是 `0`，當兩個位元不相同時，結果是 `1`。透過對 `start` 和 `goal` 進行 XOR 運算，我們可以找出所有不同的位元位置。最後計算 XOR 結果中有多少個 1，這代表需要翻轉的位元數