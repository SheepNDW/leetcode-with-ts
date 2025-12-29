function pyramidTransition(bottom: string, allowed: string[]): boolean {
  const allowedMap = new Map<string, string[]>();

  for (const triplet of allowed) {
    const key = triplet.slice(0, 2);
    const value = triplet[2];
    if (!allowedMap.has(key)) {
      allowedMap.set(key, []);
    }
    allowedMap.get(key)!.push(value);
  }

  const memo = new Map<string, boolean>();

  function dfs(row: string): boolean {
    if (row.length === 1) return true;
    if (memo.has(row)) return memo.get(row)!;

    for (let i = 0; i < row.length - 1; i++) {
      const key = row[i] + row[i + 1];
      if (!allowedMap.has(key)) {
        memo.set(row, false);
        return false;
      }
    }

    const next: string[] = [];

    function backtrack(index: number): boolean {
      if (index === row.length - 1) {
        return dfs(next.join(''));
      }

      const key = row[index] + row[index + 1];
      const candidates = allowedMap.get(key)!;

      for (const ch of candidates) {
        next[index] = ch;
        if (backtrack(index + 1)) return true;
      }
      return false;
    }

    const result = backtrack(0);
    memo.set(row, result);
    return result;
  }

  return dfs(bottom);
}

export { pyramidTransition };
