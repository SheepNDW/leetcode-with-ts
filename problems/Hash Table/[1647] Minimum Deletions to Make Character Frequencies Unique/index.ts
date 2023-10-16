function minDeletions(s: string): number {
  // 計算每個字母出現頻率
  const charFrequency = new Map<string, number>();
  for (const char of s) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  let deletions = 0;
  const seen = new Set<number>();

  for (const freq of charFrequency.values()) {
    let targetFreq = freq;
    while (targetFreq && seen.has(targetFreq)) {
      targetFreq--;
      deletions++;
    }
    seen.add(targetFreq);
  }

  return deletions;
}

export { minDeletions };
