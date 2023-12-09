function largestOddNumber0(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    const currSubs = +num.slice(0, i + 1);
    if (currSubs & 1) return `${currSubs}`;
  }
  return '';
}

// 直接判斷最後一個是不是偶數
function largestOddNumber(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] & 1) return num.slice(0, i + 1);
  }
  return '';
}

export { largestOddNumber };
