function maximumBeauty(items: number[][], queries: number[]): number[] {
  items.sort((a, b) => a[0] - b[0]);
  const sortedQuery = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);

  const res = Array.from({ length: queries.length }, () => 0);
  let maxBeauty = 0;
  let j = 0;

  for (const [q, i] of sortedQuery) {
    while (j < items.length && items[j][0] <= q) {
      maxBeauty = Math.max(maxBeauty, items[j][1]);
      j += 1;
    }
    res[i] = maxBeauty;
  }

  return res;
}

export { maximumBeauty };
