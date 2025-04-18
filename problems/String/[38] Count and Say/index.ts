// recursively
function countAndSay0(n: number): string {
  if (n === 1) return '1';
  const prev = countAndSay(n - 1);
  return describe(prev);
}

// iteratively
function countAndSay(n: number): string {
  let res = '1';

  for (let i = 1; i < n; i++) {
    res = describe(res);
  }

  return res;
}

function describe(s: string): string {
  let res = '';
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      res += `${count}${s[i - 1]}`;
      count = 1;
    }
  }

  res += `${count}${s[s.length - 1]}`;
  return res;
}

export { countAndSay };
