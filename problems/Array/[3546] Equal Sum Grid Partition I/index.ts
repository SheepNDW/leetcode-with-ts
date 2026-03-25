function canPartitionGrid(grid: number[][]): boolean {
  const m = grid.length;
  const n = grid[0].length;

  const sumRow = new Array(m).fill(0);
  const sumCol = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sumRow[i] += grid[i][j];
      sumCol[j] += grid[i][j];
    }
  }

  const totalSum = sumRow.reduce((a, b) => a + b, 0);
  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;

  let prefix = 0;
  for (let i = 0; i < m - 1; i++) {
    prefix += sumRow[i];
    if (prefix === target) return true;
  }

  prefix = 0;
  for (let j = 0; j < n - 1; j++) {
    prefix += sumCol[j];
    if (prefix === target) return true;
  }

  return false;
}

export { canPartitionGrid };
