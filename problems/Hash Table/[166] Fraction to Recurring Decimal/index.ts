function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) return '0';

  let a = numerator;
  let b = denominator;
  let sign = 1;
  if (a < 0) {
    sign *= -1;
    a = Math.abs(a);
  }
  if (b < 0) {
    sign *= -1;
    b = Math.abs(b);
  }

  let res = sign === -1 ? '-' : '';
  res += Math.floor(a / b);

  let r = a % b;
  if (r === 0) return res;

  res += '.';

  const map = new Map<number, number>();

  while (r !== 0) {
    if (map.has(r)) {
      const idx = map.get(r)!;
      res = res.slice(0, idx) + '(' + res.slice(idx) + ')';
      return res;
    }

    map.set(r, res.length);

    r *= 10;
    const d = Math.floor(r / b);
    res += d;
    r %= b;
  }

  return res;
}

export { fractionToDecimal };
