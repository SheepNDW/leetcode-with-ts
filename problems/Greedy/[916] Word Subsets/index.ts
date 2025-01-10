function wordSubsets(words1: string[], words2: string[]): string[] {
  const maxFreq: Record<string, number> = {};

  for (const word of words2) {
    const localFreq: Record<string, number> = {};

    // 計算每個字串中的字母頻率
    for (const char of word) {
      if (!localFreq[char]) localFreq[char] = 0;
      localFreq[char] += 1;
    }

    // 更新全域最大頻率表
    for (const char in localFreq) {
      maxFreq[char] = Math.max(maxFreq[char] || 0, localFreq[char]);
    }
  }

  const res: string[] = [];

  for (const word of words1) {
    const freq: Record<string, number> = {};

    for (const char of word) {
      if (!freq[char]) freq[char] = 0;
      freq[char] += 1;
    }

    // 檢查是否滿足 maxFreq 的條件
    let isUniversal = true;
    for (const char in maxFreq) {
      if ((freq[char] || 0) < maxFreq[char]) {
        isUniversal = false;
        break;
      }
    }

    if (isUniversal) {
      res.push(word);
    }
  }

  return res;
}

export { wordSubsets };
