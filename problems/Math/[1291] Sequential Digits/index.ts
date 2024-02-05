function sequentialDigits0(low: number, high: number): number[] {
  const lowStr = low.toString();
  const lowDigits = lowStr.length;
  const highDigits = high.toString().length;

  const ans: number[] = [];

  for (let i = lowDigits; i <= highDigits; i++) {
    for (let start = 1; start <= 10 - i; start++) {
      const num = generateDigit(start, i);
      if (num >= low && num <= high) ans.push(num);
    }
  }

  return ans;
}

function generateDigit(start: number, length: number): number {
  let result = start;
  for (let i = 1; i < length; i++) {
    start++;
    if (start > 9) return -1; // 如果超過9，則不可能形成連續數字
    result = result * 10 + start;
  }
  return result;
}

// simply thinking
function sequentialDigits1(low: number, high: number): number[] {
  const ans: number[] = [];

  for (let i = 1; i <= 9; i++) {
    let curNum = i;
    for (let j = i + 1; j <= 9; j++) {
      curNum = curNum * 10 + j;
      if (curNum >= low && curNum <= high) ans.push(curNum);
    }
  }

  return ans.sort((a, b) => a - b);
}

// trick: pre-build all sequences
const allSequentialDigits = [
  12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678,
  6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678,
  3456789, 12345678, 23456789, 123456789,
];

function sequentialDigits(low: number, high: number): number[] {
  return allSequentialDigits.filter((num) => num >= low && num <= high);
}

export { sequentialDigits };
