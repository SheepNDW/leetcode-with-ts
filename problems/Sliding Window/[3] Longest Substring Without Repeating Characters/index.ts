function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let res = 0;
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    while (j < s.length && !set.has(s[j])) {
      set.add(s[j]);
      j++;
    }
    res = Math.max(res, j - i);
    set.delete(s[i]);
  }

  return res;
}

export { lengthOfLongestSubstring };
