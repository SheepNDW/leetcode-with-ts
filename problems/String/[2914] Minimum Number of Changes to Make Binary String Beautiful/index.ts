function minChanges(s: string): number {
  let count = 0;

  for (let i = 1; i < s.length; i += 2) {
    if (s[i] !== s[i - 1]) {
      count += 1;
    }
  }

  return count;
}

export { minChanges };
