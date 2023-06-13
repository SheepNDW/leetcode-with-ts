function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const rows = new Map<string, number>();
  const cols = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const row = grid[i].join(',');
    const col = grid.map((row) => row[i]).join(',');
    rows.set(row, (rows.get(row) || 0) + 1);
    cols.set(col, (cols.get(col) || 0) + 1);
  }

  let count = 0;
  for (const [key, value] of rows.entries()) {
    count += value * (cols.get(key) || 0);
  }

  return count;
}

export { equalPairs };
