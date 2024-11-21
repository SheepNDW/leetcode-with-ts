function takeCharacters(s: string, k: number): number {
  let A = -k;
  let B = -k;
  let C = -k;

  for (const char of s) {
    if (char === 'a') A++;
    else if (char === 'b') B++;
    else C++;
  }

  if (A < 0 || B < 0 || C < 0) return -1;

  const n = s.length;
  let res = 0;
  let a = 0;
  let b = 0;
  let c = 0;

  let j = 0;
  for (let i = 0; i < n; i++) {
    while (a <= A && b <= B && c <= C) {
      res = Math.max(res, j - i); // [i,j)

      if (j === n) break;

      if (s[j] === 'a') a++;
      if (s[j] === 'b') b++;
      if (s[j] === 'c') c++;

      j++;
    }

    if (s[i] === 'a') a--;
    if (s[i] === 'b') b--;
    if (s[i] === 'c') c--;
  }

  return n - res;
}

export { takeCharacters };
