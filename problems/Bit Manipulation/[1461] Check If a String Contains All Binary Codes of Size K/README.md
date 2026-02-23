## 1461. Check If a String Contains All Binary Codes of Size K

先判斷有多少個二進位組合，長度為 `k` 的情況下會有 `2^k` 個組合，然後拆解 `s` 的所有長度為 `k` 的子字串，然後存入 set 中，當 set 長度 >= `2^k` 時代表有解
