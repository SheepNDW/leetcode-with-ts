function appendCharacters0(s: string, t: string): number {
  let needed = t.length;
  let i = 0;

  for (const c of s) {
    if (c === t[i]) {
      needed--;
      i++;
    }
    if (needed === 0) return 0;
  }

  return needed;
}

/*
  alternatives
*/
function appendCharacters(s: string, t: string): number {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      j++;
    }
    i++;
  }

  return t.length - j;
}

export { appendCharacters };
