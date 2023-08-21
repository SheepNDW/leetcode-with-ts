function repeatedSubstringPattern0(s: string): boolean {
  const n = s.length;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      const pattern = s.substring(0, i);
      let isRepeatedPattern = true;
      for (let j = i; j < n; j += i) {
        const substr = s.substring(j, j + i);
        if (pattern !== substr) {
          isRepeatedPattern = false;
          break;
        }
      }
      if (isRepeatedPattern) {
        return true;
      }
    }
  }

  return false;
}

// ==== Approach 2 String Concatenation ====
function repeatedSubstringPattern(s: string): boolean {
  return s.repeat(2).slice(1, -1).includes(s);
}

export { repeatedSubstringPattern };
