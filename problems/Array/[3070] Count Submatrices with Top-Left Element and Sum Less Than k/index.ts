function countSubmatrices(grid: number[][], k: number): number {
  const m = grid.length;
  const n = grid[0].length;

  const prefix: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  prefix[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    prefix[i][0] = prefix[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < n; j++) {
    prefix[0][j] = prefix[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      prefix[i][j] = grid[i][j] + prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1];
    }
  }

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (prefix[i][j] <= k) {
        count++;
      }
    }
  }
  return count;
}

export { countSubmatrices };
