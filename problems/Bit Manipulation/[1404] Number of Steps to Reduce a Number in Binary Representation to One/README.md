## 1404. Number of Steps to Reduce a Number in Binary Representation to One

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

正確的做法是直接從右向左遍歷字串，處理每一位元，如果目前位元和進位相加後是奇數，則需要進位並加 2 步（一步是加 1，另一步是除以 2）；如果是偶數，則只需除以 2。最後，如果有進位，再加一步。

```ts
function numSteps(s: string): number {
  let steps = 0;
  let carry = 0; // 處理進位

  for (let i = s.length - 1; i > 0; i--) {
    const bit = Number(s[i]) + carry;

    if (bit === 1) {
      carry = 1; // 如果是奇數，加 1 變成偶數（產生進位）
      steps += 2; // 一步加1，一步除以2
    } else {
      steps += 1; // 如果是偶數，直接除以2
    }
  }

  return steps + carry;
}
```
