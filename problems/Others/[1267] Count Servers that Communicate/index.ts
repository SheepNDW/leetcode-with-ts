function countServers(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const rows = Array(m).fill(0);
  const cols = Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rows[i]++;
        cols[j]++;
      }
    }
  }

  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && (rows[i] > 1 || cols[j] > 1)) {
        res++;
      }
    }
  }

  return res;
}

export { countServers };
