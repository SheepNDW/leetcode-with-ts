/*
  simulate with stack
*/
function reverseParentheses0(s: string): string {
  let res = '';
  const stack: number[] = [];

  for (const ch of s) {
    if (ch === '(') {
      stack.push(res.length);
    } else if (ch === ')') {
      const i = stack.pop()!;
      res = reverseSubstr(res, i, res.length - 1);
    } else {
      res += ch;
    }
  }

  return res;
}

function reverseSubstr(s: string, i: number, j: number): string {
  const arr = s.split('');

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr.join('');
}

/*
  O(n) solution
*/
function reverseParentheses(s: string): string {
  const n = s.length;
  let res = '';
  const stack: number[] = [];
  const pair: number[] = Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      const j = stack.pop()!;
      pair[i] = j;
      pair[j] = i;
    }
  }

  let i = 0;
  let d = 1;

  while (i < n) {
    if (s[i] !== '(' && s[i] !== ')') {
      res += s[i];
    } else {
      i = pair[i];
      d = -d;
    }
    i += d;
  }

  return res;
}

export { reverseParentheses };
