function restoreArray(adjacentPairs: number[][]): number[] {
  const map = new Map<number, number[]>();

  for (const [u, v] of adjacentPairs) {
    if (!map.has(u)) map.set(u, []);
    if (!map.has(v)) map.set(v, []);
    map.get(u)?.push(v);
    map.get(v)?.push(u);
  }

  let current = 0;
  for (const [key, value] of map.entries()) {
    if (value.length === 1) {
      current = key;
      break;
    }
  }

  const originalArray = [current];
  while (originalArray.length < adjacentPairs.length + 1) {
    const nextCandidates = map.get(current)!;
    for (const next of nextCandidates) {
      // 如果只有第一個元素，那麼可以選擇任何相鄰的元素作為下一個
      // 另外要確保我們選到的 next 不是之前加入過的相鄰元素
      if (originalArray.length === 1 || next !== originalArray[originalArray.length - 2]) {
        originalArray.push(next);
        current = next;
        break;
      }
    }
  }

  return originalArray;
}

export { restoreArray };
