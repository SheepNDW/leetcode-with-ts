// Time: O(n * k)
function hasAllCodes(s: string, k: number): boolean {
  const n = s.length;
  const need = 1 << k;
  const seen = new Set<string>();

  for (let i = 0; i <= n - k; i++) {
    const sub = s.slice(i, i + k);
    seen.add(sub);

    if (seen.size === need) {
      return true;
    }
  }

  return false;
}

export { hasAllCodes };
