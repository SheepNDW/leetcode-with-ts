/*
  brute force
*/
function getHappyString1(n: number, k: number): string {
  const chars = ['a', 'b', 'c'];
  const res: string[] = [];

  function dfs(curr: string) {
    if (curr.length === n) {
      res.push(curr);
      return;
    }

    for (const ch of chars) {
      if (curr.length === 0 || curr[curr.length - 1] !== ch) {
        dfs(curr + ch);
      }
    }
  }

  dfs('');
  return k <= res.length ? res[k - 1] : '';
}

/*
  optimize
*/
function getHappyString(n: number, k: number): string {
  const total = 3 * Math.pow(2, n - 1);
  if (k > total) return '';

  const chars = ['a', 'b', 'c'];
  let str = '';

  function dfs(n: number, k: number) {
    if (n === 0) return;

    const t = Math.floor(k / Math.pow(2, n - 1));
    let ch = chars[t];
    if (str.length > 0 && ch >= str[str.length - 1]) {
      ch = chars[t + 1];
    }
    str += ch;

    dfs(n - 1, k - t * Math.pow(2, n - 1));
  }

  dfs(n, k - 1);
  return str;
}

export { getHappyString };
