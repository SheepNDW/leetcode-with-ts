function longestSubsequence(s: string, k: number): number {
  const n = s.length;
  let pow = 0;
  let cur = 0;
  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') {
      count++;
    } else {
      if (pow < Math.log2(k) + 1 && cur + (1 << pow) <= k) {
        cur += 1 << pow;
        count++;
      }
    }
    pow++;
  }

  return count;
}

export { longestSubsequence };
