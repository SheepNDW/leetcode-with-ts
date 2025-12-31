function numMagicSquaresInside(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;

  let count = 0;

  for (let i = 0; i < row - 2; i++) {
    for (let j = 0; j < col - 2; j++) {
      count += magic(grid, i, j);
    }
  }

  return count;
}

function magic(grid: number[][], r: number, c: number): number {
  const set = new Set<number>();

  for (let i = r; i <= r + 2; i++) {
    for (let j = c; j <= c + 2; j++) {
      const v = grid[i][j];
      if (set.has(v) || v < 1 || v > 9) return 0;
      set.add(v);
    }
  }

  const target = 15;

  // rows
  for (let i = r; i <= r + 2; i++) {
    let sum = 0;
    for (let j = c; j <= c + 2; j++) {
      sum += grid[i][j];
    }
    if (sum !== target) return 0;
  }

  // cols
  for (let j = c; j <= c + 2; j++) {
    let sum = 0;
    for (let i = r; i <= r + 2; i++) {
      sum += grid[i][j];
    }
    if (sum !== target) return 0;
  }

  // diagonals
  if (
    grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== target ||
    grid[r + 2][c] + grid[r + 1][c + 1] + grid[r][c + 2] !== target
  ) {
    return 0;
  }

  return 1;
}

export { numMagicSquaresInside };
