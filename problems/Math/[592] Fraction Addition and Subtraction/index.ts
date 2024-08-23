function fractionAddition(expression: string): string {
  const fractions: string[] = [];

  let cur = '';
  for (const ch of expression) {
    if (ch === '+' || ch === '-') {
      if (cur) {
        fractions.push(cur);
      }
      cur = ch;
    } else {
      cur += ch;
    }
  }

  fractions.push(cur);

  // 初始化總和分數，起始為 0/1
  let numeratorSum = 0;
  let denominatorSum = 1;

  for (const frac of fractions) {
    const [numerator, denominator] = frac.split('/').map(Number);

    numeratorSum = numeratorSum * denominator + numerator * denominatorSum;
    denominatorSum *= denominator;
  }

  const gcdValue = gcd(Math.abs(numeratorSum), denominatorSum);
  numeratorSum /= gcdValue;
  denominatorSum /= gcdValue;

  return `${numeratorSum}/${denominatorSum}`;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export { fractionAddition };
