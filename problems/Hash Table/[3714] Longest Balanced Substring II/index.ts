function longestBalanced(s: string): number {
  const n = s.length;
  let res = 0;

  let len = 1;
  for (let i = 1; i < n; i++) {
    if (s[i] == s[i - 1]) {
      len++;
    } else {
      res = Math.max(res, len);
      len = 1;
    }
  }
  res = Math.max(res, len);

  for (const skip of ['a', 'b', 'c']) {
    let i = 0;
    while (i < n) {
      while (i < n && s[i] === skip) i++;
      if (i >= n) break;
      let j = i;
      while (j < n && s[j] !== skip) j++;

      if (j - i >= 2) {
        const first = new Map<number, number>();
        first.set(0, i - 1);
        let diff = 0;
        const c1 = s[i];
        for (let k = i; k < j; k++) {
          if (s[k] === c1) {
            diff++;
          } else {
            diff--;
          }
          if (first.has(diff)) {
            const len = k - first.get(diff)!;
            res = Math.max(res, len);
          } else {
            first.set(diff, k);
          }
        }
      }
      i = j;
    }
  }

  const map = new Map<string, number>();
  map.set('0,0', -1);
  let ca = 0;
  let cb = 0;
  let cc = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === 'a') ca++;
    else if (s[i] === 'b') cb++;
    else cc++;

    const key = `${ca - cb},${ca - cc}`;
    if (map.has(key)) {
      const len = i - map.get(key)!;
      res = Math.max(res, len);
    } else {
      map.set(key, i);
    }
  }

  return res;
}

export { longestBalanced };
