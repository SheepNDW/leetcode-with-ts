## 592. Fraction Addition and Subtraction

首先我們要解析表達式，找出所有的分數，然後將分數相加，最後再約分到最簡分數。

約分時，我們要先找出 GCD（Greatest Common Divisor，最大公因數），然後將分子和分母都除以 GCD。

那要怎麼去求 GCD 呢？我們可以使用歐幾里得演算法（Euclidean algorithm）

* `gcd(a, b) = gcd(b, a % b)`
* 當 `b = 0` 時，`gcd(a, 0) = a`

```ts
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
```

