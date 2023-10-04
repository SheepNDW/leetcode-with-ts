function reverse0(x: number): number {
  let reversed = 0;

  while (x !== 0) {
    const pop = x % 10;
    x = (x - pop) / 10;

    if (reversed > (Math.pow(2, 31) - 1 - pop) / 10) return 0;
    if (reversed < (Math.pow(-2, 31) + pop) / 10) return 0;

    reversed = reversed * 10 + pop;
  }

  return reversed;
}

function reverse(x: number): number {
  const isNegative = x < 0;
  const MAX = 2147483647; // 2^31 - 1
  const MIN = -2147483648; // -2^31

  let str = x.toString();
  let reversedStr = isNegative ? str.slice(1) : str;
  reversedStr = reversedStr.split('').reverse().join('');

  let reversedNum = isNegative ? -Number(reversedStr) : Number(reversedStr);

  return reversedNum > MAX || reversedNum < MIN ? 0 : reversedNum;
}

export { reverse };
