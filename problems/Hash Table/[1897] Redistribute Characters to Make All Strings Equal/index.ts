function makeEqual(words: string[]): boolean {
  const n = words.length;
  const hash = new Map<string, number>();

  words.forEach((word) => {
    for (const c of word) {
      hash.set(c, (hash.get(c) ?? 0) + 1);
    }
  });

  for (const value of hash.values()) {
    if (value % n) return false;
  }

  return true;
}

export { makeEqual };
