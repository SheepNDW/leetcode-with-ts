function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  // 0: free 1: guard 2: wall 3: guardable
  const grid: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  for (const [i, j] of guards) {
    grid[i][j] = 1;
  }

  for (const [i, j] of walls) {
    grid[i][j] = 2;
  }

  for (const [i, j] of guards) {
    // up
    for (let k = i - 1; k >= 0; k--) {
      if (grid[k][j] === 1 || grid[k][j] === 2) {
        break;
      }
      grid[k][j] = 3;
    }
    // right
    for (let k = j + 1; k < n; k++) {
      if (grid[i][k] === 1 || grid[i][k] === 2) {
        break;
      }
      grid[i][k] = 3;
    }
    // bottom
    for (let k = i + 1; k < m; k++) {
      if (grid[k][j] === 1 || grid[k][j] === 2) {
        break;
      }
      grid[k][j] = 3;
    }
    // left
    for (let k = j - 1; k >= 0; k--) {
      if (grid[i][k] === 1 || grid[i][k] === 2) {
        break;
      }
      grid[i][k] = 3;
    }
  }

  let count = 0;

  for (const row of grid) {
    for (const el of row) {
      if (el === 0) count++;
    }
  }

  return count;
}

export { countUnguarded };
