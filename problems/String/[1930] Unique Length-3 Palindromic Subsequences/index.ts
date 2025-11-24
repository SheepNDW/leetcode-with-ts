/**
 * 1. 記錄每個字符首次出現和最後一次出現的位置
 * 2. 字串中最多有 26 個不重複的小寫字母，我們檢查其首次出現和最後一次出現之間的所有 unique 字母。
 *    最差情況下會對整個字串進行遍歷，時間複雜度為 O(26n)，可以簡化為 O(n)
 */
function countPalindromicSubsequence0(s: string): number {
  const n = s.length;
  const firstOccurrence = new Map<string, number>();
  const lastOccurrence = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    if (!firstOccurrence.has(s[i])) {
      firstOccurrence.set(s[i], i);
    }
    lastOccurrence.set(s[i], i);
  }

  let count = 0;
  firstOccurrence.forEach((firstIndex, char) => {
    const lastIndex = lastOccurrence.get(char)!;
    const uniqueChars = new Set<string>();
    for (let i = firstIndex + 1; i < lastIndex; i++) {
      uniqueChars.add(s[i]);
    }
    count += uniqueChars.size;
  });

  return count;
}

/*
  use array to record first and last occurrence index
*/
function countPalindromicSubsequence(s: string): number {
  const n = s.length;
  const first = new Array(26).fill(-1);
  const last = new Array(26).fill(-1);

  for (let i = 0; i < n; i++) {
    const idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
    if (first[idx] === -1) first[idx] = i;
    last[idx] = i;
  }

  let res = 0;

  for (let c = 0; c < 26; c++) {
    if (first[c] === -1 || first[c] === last[c]) continue;
    const set = new Set<string>();
    for (let j = first[c] + 1; j < last[c]; j++) {
      set.add(s[j]);
    }
    res += set.size;
  }

  return res;
}

export { countPalindromicSubsequence };
