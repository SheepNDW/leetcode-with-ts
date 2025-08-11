## 869. Reordered Power of 2

這題本質是在檢查 `n` 的數字組成是否能和某個 `2^k` 的數字組成相同。

解法 1：digit counting

要判斷一個數是否能被重組成 `2^k`，可以先記錄 `n` 的數字組成，然後對每個 `2^k` 的數字也記錄其數字組成，最後比較兩者是否相同。

解法 2：排序

將 `n` 轉換成字串後排序，然後與每個 `2^k` 的字串排序結果進行比較。

```ts
function reorderedPowerOf2(n: number): boolean {
  const sig = (x: number) => String(x).split('').sort().join('');
  const target = sig(n);
  for (let i = 0; i < 31; i++) {
    const p = 1 << i;
    if (sig(p) === target) return true;
  }
  return false;
}
```
