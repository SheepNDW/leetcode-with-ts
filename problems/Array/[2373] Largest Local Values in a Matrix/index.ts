function largestLocal(grid: number[][]): number[][] {
  const n = grid.length;
  const maxLocal = Array.from({ length: n - 2 }, () => Array(n - 2).fill(0));

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      let max = 0;
      for (let row = i; row <= i + 2; row++) {
        for (let col = j; col <= j + 2; col++) {
          max = Math.max(max, grid[row][col]);
        }
      }
      maxLocal[i][j] = max;
    }
  }

  return maxLocal;
}

export { largestLocal };
