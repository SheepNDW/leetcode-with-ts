## 1310. XOR Queries of a Subarray

求區間的 XOR 和，可以轉換成前綴 XOR 和的 XOR，也就是 `xor[i:j] = pre_xor[j] ^ pre_xor[i - 1]`
