function islandPerimeter(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;
  let result = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        result += countStripes(i, j, grid);
      }
    }
  }

  return result;
}

function countStripes(row: number, col: number, grid: number[][]) {
  const top = row - 1 < 0 || grid[row - 1][col] === 0 ? 1 : 0;
  const bot = row + 1 >= grid.length || grid[row + 1][col] === 0 ? 1 : 0;
  const left = col - 1 < 0 || grid[row][col - 1] === 0 ? 1 : 0;
  const right = col + 1 >= grid[0].length || grid[row][col + 1] === 0 ? 1 : 0;

  return top + bot + left + right;
}

export { islandPerimeter };
