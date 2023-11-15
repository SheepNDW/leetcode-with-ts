/**
 * 1. 記錄每個字符首次出現和最後一次出現的位置
 * 2. 字串中最多有 26 個不重複的小寫字母，我們檢查其首次出現和最後一次出現之間的所有 unique 字母。
 *    最差情況下會對整個字串進行遍歷，時間複雜度為 O(26n)，可以簡化為 O(n)
 */
function countPalindromicSubsequence(s: string): number {
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

export { countPalindromicSubsequence };
