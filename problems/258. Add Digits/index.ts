// function addDigits(num: number): number {
//   if (num <= 9) {
//     return num;
//   }

//   const digits = `${num}`.split('').map(Number);
//   const result = digits.reduce((prev, curr) => prev + curr, 0);

//   return addDigits(result);
// }

// 數學解
// function addDigits(num: number): number {
//   if (num === 0) return 0;
//   const result = num % 9;
//   return result === 0 ? 9 : result;
// }
function addDigits(num: number): number {
  return ((num - 1) % 9) + 1;
}

export { addDigits };
