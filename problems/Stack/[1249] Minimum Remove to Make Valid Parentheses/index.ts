function minRemoveToMakeValid(s: string): string {
  const n = s.length;
  const stack: number[] = [];
  const removeIndex = new Set<number>();

  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      stack.push(i);
    }
    if (s[i] === ')') {
      if (stack.length === 0) {
        removeIndex.add(i);
      } else {
        stack.pop();
      }
    }
  }

  stack.forEach((i) => removeIndex.add(i));

  let result = '';
  for (let i = 0; i < n; i++) {
    if (!removeIndex.has(i)) {
      result += s[i];
    }
  }

  return result;
}

export { minRemoveToMakeValid };
