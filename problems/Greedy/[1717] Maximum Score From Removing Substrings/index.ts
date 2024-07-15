function maximumGain(s: string, x: number, y: number): number {
  let xChar = 'ab';
  let yChar = 'ba';
  if (x < y) {
    xChar = 'ba';
    yChar = 'ab';
    let temp = x;
    x = y;
    y = temp;
  }

  let res = 0;
  const stack: string[] = [];

  // 處理 xChar 子字串
  for (const ch of s) {
    if (stack.length > 0 && stack[stack.length - 1] + ch === xChar) {
      stack.pop();
      res += x;
    } else {
      stack.push(ch);
    }
  }

  // 處理剩下的字串中的 yChar 子字串
  const remaining: string[] = [];
  for (const ch of stack) {
    if (remaining.length > 0 && remaining[remaining.length - 1] + ch === yChar) {
      remaining.pop();
      res += y;
    } else {
      remaining.push(ch);
    }
  }

  return res;
}

export { maximumGain };
