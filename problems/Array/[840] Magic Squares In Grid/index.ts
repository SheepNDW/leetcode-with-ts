function numMagicSquaresInside(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;

  let count = 0;

  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      count += isMagicSquare(grid, i, j);
    }
  }

  return count;
}

function isMagicSquare(grid: number[][], i: number, j: number): number {
  const set = new Set<number>();
  const targetSum = grid[i][j - 1] + grid[i][j] + grid[i][j + 1];

  for (let row = i - 1; row <= i + 1; row++) {
    let sum = 0;
    for (let col = j - 1; col <= j + 1; col++) {
      const num = grid[row][col];

      if (num < 1 || num > 9 || set.has(num)) return 0;

      set.add(num);
      sum += num;
    }

    if (sum !== targetSum) return 0;
  }

  for (let col = j - 1; col <= j + 1; col++) {
    let sum = 0;

    for (let row = i - 1; row <= i + 1; row++) {
      sum += grid[row][col];
    }

    if (sum !== targetSum) return 0;
  }

  const diagonal1 = grid[i - 1][j - 1] + grid[i][j] + grid[i + 1][j + 1];
  const diagonal2 = grid[i - 1][j + 1] + grid[i][j] + grid[i + 1][j - 1];
  if (diagonal1 !== targetSum || diagonal2 !== targetSum) return 0;

  return 1;
}

export { numMagicSquaresInside };
