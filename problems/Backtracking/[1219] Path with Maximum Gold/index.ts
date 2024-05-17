function getMaximumGold(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const backtrack = (row: number, col: number, gold: number): number => {
    if (col < 0 || col == n || row < 0 || row == m) return gold;
    if (grid[row][col] === 0) return gold;

    const temp = grid[row][col];
    gold += temp;
    grid[row][col] = 0;

    const left = backtrack(row, col - 1, gold);
    const right = backtrack(row, col + 1, gold);
    const up = backtrack(row - 1, col, gold);
    const bottom = backtrack(row + 1, col, gold);

    grid[row][col] = temp;
    return Math.max(left, right, up, bottom);
  };

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, backtrack(i, j, 0));
    }
  }
  return ans;
}

export { getMaximumGold };
