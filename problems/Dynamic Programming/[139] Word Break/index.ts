function wordBreak(s: string, wordDict: string[]): boolean {
  const table = new Array(s.length + 1).fill(false);
  const wordSet = new Set(wordDict);

  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === false) continue;
    for (let j = i + 1; j < table.length; j++) {
      if (wordSet.has(s.slice(i, j))) {
        table[j] = true;
      }
    }
  }

  return table[table.length - 1];
}

export { wordBreak };
