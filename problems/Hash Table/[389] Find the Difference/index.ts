function findTheDifference(s: string, t: string): string {
  const counts: Record<string, number> = {};

  for (const c of s) {
    if (counts[c]) {
      counts[c]++;
    } else {
      counts[c] = 1;
    }
  }

  for (const c of t) {
    if (counts[c]) {
      counts[c]--;
    } else {
      return c;
    }
  }

  return '';
}

export { findTheDifference };
