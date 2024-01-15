function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const freq1: Record<string, number> = {};
  const freq2: Record<string, number> = {};

  for (const c of word1) {
    freq1[c] = (freq1[c] || 0) + 1;
  }
  for (const c of word2) {
    freq2[c] = (freq2[c] || 0) + 1;
  }

  const keys1 = Object.keys(freq1);
  const keys2 = Object.keys(freq2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!freq2.hasOwnProperty(key)) return false;
  }

  const values1 = Object.values(freq1).sort((a, b) => a - b);
  const values2 = Object.values(freq2).sort((a, b) => a - b);

  return values1.every((value, index) => value === values2[index]);
}

/*
  Note:
    1. 字母組合要相同
    2. 頻率組合要相同
*/

export { closeStrings };
