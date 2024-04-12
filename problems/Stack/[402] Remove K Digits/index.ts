function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];

  for (const c of num) {
    while (stack.length && c < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(c);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  const digits = stack.reduce((a, c) => {
    if (a === '' && c === '0') return a;
    return a + c;
  }, '');

  return digits === '' ? '0' : digits;
}

export { removeKdigits };
