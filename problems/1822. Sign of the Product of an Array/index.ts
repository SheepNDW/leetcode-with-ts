// const signFunc = (x: number) => {
//   if (x > 0) return 1;
//   else if (x < 0) return -1;
//   return 0;
// };

// function arraySign(nums: number[]): number {
//   const product = nums.reduce((prev, curr) => prev * curr);
//   return signFunc(product);
// }

// 判斷 0 與負數個數
function arraySign(nums: number[]): number {
  let negativeCount = 0;

  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) negativeCount++;
  }

  return negativeCount % 2 ? -1 : 1;
}

export { arraySign };
