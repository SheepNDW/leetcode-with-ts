// function addDigits(num: number): number {
//   if (num <= 9) {
//     return num;
//   }

//   const digits = `${num}`.split('').map(Number);
//   const result = digits.reduce((prev, curr) => prev + curr, 0);

//   return addDigits(result);
// }

// 數學解
function addDigits(num: number): number {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
}

export { addDigits };
