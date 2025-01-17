## 2683. Neighboring Bitwise XOR

直覺的做法就是利用 XOR 的特性，如果 `a ⊕ b = c`，那麼 `a = b ⊕ c` 或 `b = a ⊕ c`。直接模擬出由 `0` 開頭或是由 `1` 開頭的 `original`，最後看哪一個符合條件即可。

另外一個方式我們可以先觀察他們之間的關係：

```ts
derived[0] = original[0] XOR original[1]
derived[1] = original[1] XOR original[2]
derived[2] = original[2] XOR original[3]
derived[3] = original[3] XOR original[4]

...

derived[n-1] = original[n-1] XOR original[0]
```

可以發現到每一個在 original 中的數字都會出現兩次，且 XOR 的交換律（commutative）和結合律（associative）與順序無關，然後我們可以發現到 

```ts
derived[0] XOR derived[1] XOR ... XOR derived[n-1] = 
(original[0] XOR original[1]) XOR (original[1] XOR original[2]) XOR ... XOR (original[n-1] XOR original[0])
```

每個 `original[i]` 都出現了兩次，因此會互相抵銷，最後會得到 `0`。因此我們可以知道 `derived` 的 XOR 結果一定也要是 `0`，否則就不可能由 `original` 來得到。

