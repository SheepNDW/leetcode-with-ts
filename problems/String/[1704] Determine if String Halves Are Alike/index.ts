function halvesAreAlike(s: string): boolean {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const n = s.length / 2;

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (vowels.has(s[i])) count++;
    if (vowels.has(s[i + n])) count--;
  }

  return count === 0;
}

export { halvesAreAlike };
