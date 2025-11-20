function maxOperations(s: string): number {
  const n = s.length;
  let ones = 0;
  let res = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === '1') {
      ones++;
    } else if (i === n - 1 || s[i + 1] === '1') {
      res += ones;
    }
  }

  return res;
}

export { maxOperations };
