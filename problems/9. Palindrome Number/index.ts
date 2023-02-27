export function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const strNumber = x.toString();
  const mid = ~~(strNumber.length / 2);
  const frontStrArray = strNumber.substring(0, mid).split('');
  const backStrArray = strNumber.substring(strNumber.length - mid).split('');

  for (let i = 0; i < mid; i++) {
    if (frontStrArray[i] !== backStrArray[mid - 1 - i]) return false;
  }

  return true;
}

// Constraints：
// -2^31 <= x <= 2^31 - 1
// 如果 x 為負數，回傳 false
// 只要 x 的數字正反讀都一樣，回傳 true，否則回傳 false
