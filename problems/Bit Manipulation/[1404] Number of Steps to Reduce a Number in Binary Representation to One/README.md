## 1404. Number of Steps to Reduce a Number in Binary Representation to One

題目給一個二進位字串 `s`，代表一個正整數，然後有兩種操作：

* 如果目前的數字是偶數，則除以 2。
* 如果目前的數字是奇數，則加 1。

目標是將這個數字減少到 1，請問需要多少步驟？

由於可能會非常大，直接將二進位字串轉成數字後進行操作會造成 overflow，所以下面的方式在第四個測試案例會掛掉：

```ts
function numSteps(s: string): number {
  let steps = 0;
  let num = parseInt(s, 2);

  while (num !== 1) {
    steps += 1;
    if (num & 1) {
      num += 1;
    } else {
      num >>= 1;
    }
  }

  return steps;
}
```

正確的做法是直接從右向左遍歷字串，用一個 `carry` 變數模擬進位，處理每一位元：

- **偶數**（當前位元 + carry 的結果末位是 0）：除以 2 就是右移一位，只需 **1 步**。
- **奇數**（當前位元 + carry 的結果末位是 1）：先加 1 變成偶數再除以 2，需要 **2 步**，同時產生進位 `carry = 1`。

迴圈條件是 `i > 0`，跳過最高位 `s[0]`。因為題目保證輸入是正整數的二進位表示，所以 `s[0]` 一定是 `'1'`。當處理到只剩最高位時，數字本身已經是 1（或因為進位變成 `10`），所以最後用 `steps + carry` 來處理這個邊界——如果有進位代表還要再做一次加法。

### Trace 範例

以 `s = "1101"`（十進位 13）為例：

| i   | s[i] | digit (s[i]+carry) | 奇/偶 | steps | carry |
| --- | ---- | ------------------ | ----- | ----- | ----- |
| 3   | 1    | 1                  | 奇    | 2     | 1     |
| 2   | 0    | 1                  | 奇    | 4     | 1     |
| 1   | 1    | 2                  | 偶    | 5     | 1     |

最後 `steps + carry = 5 + 1 = 6`。

```ts
function numSteps(s: string): number {
  let steps = 0;
  let carry = 0;

  for (let i = s.length - 1; i > 0; i--) {
    const digit = parseInt(s[i]) + carry;

    if (digit % 2 === 1) {
      steps += 2;
      carry = 1;
    } else {
      steps += 1;
    }
  }

  return steps + carry;
}
```

> 時間複雜度：O(n)，空間複雜度：O(1)，其中 n 是字串長度。
