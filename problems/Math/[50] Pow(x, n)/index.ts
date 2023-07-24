// TLE
// function myPow(x: number, n: number): number {
//   let result = 1;

//   if (n >= 0) {
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//   } else {
//     for (let i = 0; i < Math.abs(n); i++) {
//       result *= 1 / x;
//     }
//   }

//   return result;
// }

/**
 * 遞迴法解題思路：
 * 1. n 為 0 時，回傳 1
 * 2. n 為負數時取倒數，回傳 1 / myPow(x, -n)
 * 3. 當底數變成 x * x，指數則少一半，取 n 的一半，並且判斷 n 是否為偶數
 * 4. 若為偶數，回傳 myPow(x * x, half)
 * 5. 若為奇數，回傳 x * myPow(x * x, half) (因為 n 為奇數，所以要多乘一個 x)
 */
// function myPow(x: number, n: number): number {
//   if (n === 0) return 1;
//   if (n < 0) return 1 / myPow(x, -n);

//   const half = ~~(n / 2);

//   return n % 2 === 0 ? myPow(x * x, half) : x * myPow(x * x, half);
// }

/**
 * 迭代法解題思路：
 * 1. 先將 n 取絕對值，得到 absN（以正數來計算，如果 n 為負數，最後再取倒數）
 * 2. 宣告 base 為 x，result 為 1
 * 3. 當 absN 大於 0 時，進入 while 迴圈
 * 4. 判斷 absN 是否為奇數，若為奇數，則將 result 乘上 base
 * 5. base 乘上自己，並將 absN 除以 2 取整數
 * 6. 回到第 3 步驟，直到 absN 為 0 時，跳出迴圈
 * 7. 判斷 n 是否為負數，若為負數，則回傳 1 / result，否則回傳 result
 */
function myPow(x: number, n: number): number {
  let absN = Math.abs(n);
  let base = x;
  let result = 1;

  while (absN > 0) {
    // & 1 等同於 % 2
    if (absN & 1) {
      result *= base;
    }
    base *= base;
    // absN >>= 1; // 用 >> 在 testcase 4 會有問題
    absN = ~~(absN / 2);
  }

  return n < 0 ? 1 / result : result;
}

export { myPow };
