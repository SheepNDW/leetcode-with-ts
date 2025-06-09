function robotWithString(s: string): string {
  const n = s.length;
  const t: string[] = [];
  const sufSmallest = Array(n); // the smallest within s[i:n-1]

  let cur = s[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    if (cur > s[i]) {
      cur = s[i];
    }
    sufSmallest[i] = cur;
  }

  let res = '';
  let i = 0;
  while (i < n) {
    if (t.length === 0 || sufSmallest[i] < t[t.length - 1]) {
      t.push(s[i]);
      i++;
    } else {
      res += t.pop();
    }
  }

  while (t.length > 0) {
    res += t.pop();
  }

  return res;
}

export { robotWithString };
