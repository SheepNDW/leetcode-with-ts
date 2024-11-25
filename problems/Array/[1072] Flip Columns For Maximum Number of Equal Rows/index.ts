function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const map = new Map<string, number>();

  for (const row of matrix) {
    let key = row.join('');

    if (row[0] === 1) {
      key = row.map((cell) => 1 - cell).join('');
    }

    map.set(key, (map.get(key) || 0) + 1);
  }

  return Math.max(...map.values());
}

export { maxEqualRowsAfterFlips };
