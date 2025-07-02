## 594. Longest Harmonious Subsequence

題目要求的 subsequence 不需要連續，只要是原數列的部分都可以符合要求。如此一來我們可以利用 hash 計算每個數字出現次數，再遍歷所有數字，若相鄰數字存在，就將兩數頻次相加，答案取最大值。
