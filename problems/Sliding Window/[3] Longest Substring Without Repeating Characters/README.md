## 3. Longest Substring Without Repeating Characters

sliding window 基本題，準備一個 `set` 來記錄目前視窗內的字元，當遇到重複的字元時，就將視窗左端向右移動，直到視窗內不再有重複的字元。
