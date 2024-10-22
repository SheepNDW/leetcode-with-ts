/*
  s = 1993
  t = 9931
  最高位出現不同的，找一個 1 之後最靠右的最大數跟他換

  要經過排序所以複雜度為: O(n log n)
*/
function maximumSwap0(num: number): number {
  const s = num.toString().split('');
  const t = [...s].sort((a, b) => Number(b) - Number(a));

  const n = s.length;
  let i = 0;
  while (i < n && s[i] === t[i]) {
    i++;
  }

  if (i === n) return num;

  let swapPos = 0;
  for (let j = n - 1; j >= i + 1; j--) {
    if (s[j] === t[i]) {
      swapPos = j;
      break;
    }
  }

  [s[i], s[swapPos]] = [s[swapPos], s[i]];

  return Number(s.join(''));
}

/*
  one pass solution

  從右往左遍歷，追蹤目前最大的數字和所在的位置
  如果目前的數字小於 maxDigit 就是潛在交換位 swapI
  全部掃完後，如果 swapI 和 swapJ 都不等於初始值代表需要交換
*/
function maximumSwap(num: number): number {
  const digits = num.toString().split('');
  const n = digits.length;

  let maxDigit = '0';
  let maxIdx = -1;
  let swapI = -1;
  let swapJ = -1;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] > maxDigit) {
      maxDigit = digits[i];
      maxIdx = i;
    }

    if (digits[i] < maxDigit) {
      swapI = i;
      swapJ = maxIdx;
    }
  }

  if (swapI === -1) return num;

  [digits[swapI], digits[swapJ]] = [digits[swapJ], digits[swapI]];

  return Number(digits.join(''));
}

export { maximumSwap };
