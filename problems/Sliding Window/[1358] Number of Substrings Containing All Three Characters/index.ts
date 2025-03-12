function numberOfSubstrings0(s: string): number {
  const n = s.length;
  const map = new Map<string, number>();

  let res = 0;
  let j = 0;
  let uniqueCount = 0;

  for (let i = 0; i < n; i++) {
    while (j < n && uniqueCount < 3) {
      const count = map.get(s[j]) ?? 0;
      if (count === 0) uniqueCount++;
      map.set(s[j], count + 1);
      j++;
    }

    if (uniqueCount === 3) {
      res += n - j + 1;
    }

    const count = map.get(s[i]);
    if (count) {
      map.set(s[i], count - 1);
      if (count - 1 === 0) uniqueCount--;
    }
  }

  return res;
}

/*
  alternatives
*/
function numberOfSubstrings(s: string): number {
  const n = s.length;

  let a = 0;
  let b = 0;
  let c = 0;

  let res = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    while (j < n && a * b * c === 0) {
      if (s[j] === 'a') a++;
      if (s[j] === 'b') b++;
      if (s[j] === 'c') c++;
      j++;
    }

    if (a * b * c > 0) {
      res += n - j + 1;
    }

    if (s[i] === 'a') a--;
    if (s[i] === 'b') b--;
    if (s[i] === 'c') c--;
  }

  return res;
}

export { numberOfSubstrings };
