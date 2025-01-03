/*
  sum[l:r] = presum[r] - presum[l-1]
*/
function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  const prefix = Array.from({ length: words.length }, () => 0);
  const res: number[] = [];

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const curWord = words[i];
    if (vowelSet.has(curWord[0]) && vowelSet.has(curWord[curWord.length - 1])) {
      count += 1;
    }
    prefix[i] = count;
  }

  for (const [l, r] of queries) {
    res.push(prefix[r] - (prefix[l - 1] || 0));
  }

  return res;
}

export { vowelStrings };
