// DP
function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length);

  const dp = new Map<string, number>();

  let maxChain = 1;

  for (const word of words) {
    let currMax = 1;
    for (let i = 0; i < word.length; i++) {
      const prevWord = word.slice(0, i) + word.slice(i + 1); // 刪掉一個字母
      const prevMax = dp.get(prevWord) ?? 0;
      currMax = Math.max(currMax, 1 + prevMax);
    }

    dp.set(word, currMax);
    maxChain = Math.max(maxChain, currMax);
  }

  return maxChain;
}

// DFS + Memo
function longestStrChain1(words: string[]): number {
  const memo = new Map<string, number>();

  function dfs(word: string): number {
    if (memo.has(word)) {
      return memo.get(word) as number;
    }

    let maxLength = 1;

    for (let i = 0; i < word.length; i++) {
      const nextWord = word.slice(0, i) + word.slice(i + 1);
      if (memo.has(nextWord) || words.includes(nextWord)) {
        maxLength = Math.max(maxLength, 1 + dfs(nextWord));
      }
    }

    memo.set(word, maxLength);
    return maxLength;
  }

  let maxChainLength = 0;

  for (const word of words) {
    maxChainLength = Math.max(maxChainLength, dfs(word));
  }

  return maxChainLength;
}

export { longestStrChain };
