function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
  const m = languages.length;
  // knows[u] = 使用者 u（1..m）會的語言集合
  const knows = Array.from({ length: m + 1 }, () => new Set<number>());

  for (let i = 1; i <= m; i++) {
    for (const lang of languages[i - 1]) {
      knows[i].add(lang);
    }
  }

  const canTalk = (u: number, v: number): boolean => {
    const lanA = knows[u];
    const lanB = knows[v];
    const small = lanA.size < lanB.size ? lanA : lanB;
    const big = small === lanA ? lanB : lanA;

    for (const lang of small) {
      if (big.has(lang)) return true;
    }

    return false;
  };

  // 收集目前無法溝通的好友對中的所有使用者
  const candidates = new Set<number>();
  for (const [u, v] of friendships) {
    if (!canTalk(u, v)) {
      candidates.add(u);
      candidates.add(v);
    }
  }

  if (candidates.size === 0) return 0;

  const cover = new Map<number, number>();
  let maxCover = 0;

  for (const u of candidates) {
    for (const lang of knows[u]) {
      const count = (cover.get(lang) ?? 0) + 1;
      cover.set(lang, count);
      maxCover = Math.max(maxCover, count);
    }
  }

  return candidates.size - maxCover;
}

export { minimumTeachings };
