export function reverse(x: number): number {
  const strX = x.toString().split('');
  if (strX.at(-1) === '0') strX.pop();

  const mid = ~~(strX.length / 2);
  for (let i = 0; i < mid; i++) {
    const r = strX.length - 1 - i;
    [strX[i], strX[r]] = [strX[r], strX[i]];
  }

  if (x < 0) {
    strX.pop();
    strX.unshift('-');
  }

  if (+strX.join('') > 2147483647 || +strX.join('') < -2147483648) return 0;
  return +strX.join('');
}
