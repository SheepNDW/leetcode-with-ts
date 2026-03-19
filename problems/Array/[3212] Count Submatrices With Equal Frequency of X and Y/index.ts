function numberOfSubmatrices(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const prefixX: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  const prefixY: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      prefixX[i][j] =
        (prefixX[i - 1]?.[j] ?? 0) +
        (prefixX[i]?.[j - 1] ?? 0) -
        (prefixX[i - 1]?.[j - 1] ?? 0) +
        (grid[i][j] === 'X' ? 1 : 0);

      prefixY[i][j] =
        (prefixY[i - 1]?.[j] ?? 0) +
        (prefixY[i]?.[j - 1] ?? 0) -
        (prefixY[i - 1]?.[j - 1] ?? 0) +
        (grid[i][j] === 'Y' ? 1 : 0);
    }
  }

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const xCount = prefixX[i][j];
      const yCount = prefixY[i][j];
      if (xCount === yCount && xCount > 0) {
        count++;
      }
    }
  }

  return count;
}

export { numberOfSubmatrices };
