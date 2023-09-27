function isValid0(s: string): boolean {
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);
  const stack: string[] = [];
  const sArray = s.split('');

  for (const key of sArray) {
    if (map.get(key)) stack.push(key);
    if ([...map.values()].includes(key)) {
      if (key !== map.get(stack.pop() || '')) return false;
    }
  }

  return stack.length === 0;
}

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    switch (char) {
      case ')':
        if (stack.pop() === '(') break;
        return false;
      case ']':
        if (stack.pop() === '[') break;
        return false;
      case '}':
        if (stack.pop() === '{') break;
        return false;
      case '(':
      case '[':
      case '{':
        stack.push(char);
    }
  }

  return stack.length === 0;
}

export { isValid };
