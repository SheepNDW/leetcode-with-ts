/*
  Two pass or Three pass
  X X X | X X X
      i  i+1
*/
function minimumDeletions0(s: string): number {
  const n = s.length;

  const pre: number[] = new Array(n).fill(0);
  pre[0] = Number(s[0] === 'b');

  for (let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] + Number(s[i] === 'b');
  }

  const suf: number[] = new Array(n).fill(0);
  suf[n - 1] = Number(s[n - 1] === 'a');

  for (let i = n - 2; i >= 0; i--) {
    suf[i] = suf[i + 1] + Number(s[i] === 'a');
  }

  let min = Math.min(pre[n - 1], suf[0]);
  for (let i = 0; i < n - 1; i++) {
    min = Math.min(min, pre[i] + suf[i + 1]);
  }

  return min;
}

/*
  using stack (one pass)

  - focus on removing "ba" pairs
*/
function minimumDeletions(s: string): number {
  const stack: string[] = [];
  let count = 0;

  for (const ch of s) {
    if (stack.length && stack[stack.length - 1] === 'b' && ch === 'a') {
      stack.pop();
      count++;
    } else {
      stack.push(ch);
    }
  }

  return count;
}

export { minimumDeletions };
