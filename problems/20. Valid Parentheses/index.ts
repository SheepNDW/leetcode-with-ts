export function isValid(s: string): boolean {
  const dict: any = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const sArray = s.split('');

  let stack: string[] = [];
  let closeCache: string[] = [];

  for (let i = 0; i < sArray.length; i++) {
    if (dict[sArray[i]]) {
      stack.push(dict[sArray[i]]);
    } else {
      closeCache.push(sArray[i]);
    }
  }

  let i = stack.length;

  if (i != closeCache.length) return false;
  while (i--) {
    if (stack[i] !== closeCache[i]) return false;
  }

  return true;
}

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('([])'));
// console.log(isValid('()[}'));

// isValid('()[]{}');
isValid('([])');
isValid('()[]{}');
