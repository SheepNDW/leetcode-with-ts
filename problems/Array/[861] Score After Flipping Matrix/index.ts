/*
  greedy
*/
function matrixScore(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  for (let row = 0; row < m; row++) {
    if (grid[row][0] === 0) {
      for (let col = 0; col < n; col++) {
        grid[row][col] = grid[row][col] ^ 1;
      }
    }
  }

  for (let col = 1; col < n; col++) {
    let zeros = 0;
    for (let row = 0; row < m; row++) {
      if (grid[row][col] === 0) {
        zeros += 1;
      }
    }
    if (zeros > m - zeros) {
      for (let row = 0; row < m; row++) {
        grid[row][col] = grid[row][col] ^ 1;
      }
    }
  }

  let score = 0;
  grid.forEach((row) => {
    const binaryStr = row.join('');
    score += parseInt(binaryStr, 2);
  });
  return score;
}

export { matrixScore };
