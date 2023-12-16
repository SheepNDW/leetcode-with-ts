function onesMinusZeros(grid: number[][]): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  const diff = Array.from({ length: m }, () => Array<number>(n).fill(0));
  const rowsDiff: number[] = [];
  const colsDiff: number[] = [];

  for (let row = 0; row < m; row++) {
    let ones = 0;
    let zeros = 0;

    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        ones++;
      } else {
        zeros++;
      }
    }

    rowsDiff.push(ones - zeros);
  }

  for (let col = 0; col < n; col++) {
    let ones = 0;
    let zeros = 0;

    for (let row = 0; row < m; row++) {
      if (grid[row][col] === 1) {
        ones++;
      } else {
        zeros++;
      }
    }

    colsDiff.push(ones - zeros);
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      diff[row][col] = rowsDiff[row] + colsDiff[col];
    }
  }

  return diff;
}

export { onesMinusZeros };
