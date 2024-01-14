function minSteps(s: string, t: string): number {
  const freq = Array.from({ length: 26 }, () => 0);

  for (let i = 0; i < s.length; i++) {
    const idx1 = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    const idx2 = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
    freq[idx1]++;
    freq[idx2]--;
  }

  return freq.reduce((acc, curr) => {
    if (curr > 0) return acc + curr;
    return acc;
  }, 0);
}

export { minSteps };
