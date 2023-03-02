export function isValid(s: string): boolean {
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
