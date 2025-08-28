function sortMatrix0(grid: number[][]): number[][] {
  const n = grid.length;

  for (let d = 1; d < n; d++) {
    let i = 0;
    let j = d;
    const curDiagonal: number[] = [];

    while (i < n && j < n) {
      curDiagonal.push(grid[i][j]);
      i++;
      j++;
    }

    curDiagonal.sort((a, b) => a - b);

    i = 0;
    j = d;
    while (i < n && j < n) {
      grid[i][j] = curDiagonal[i];
      i++;
      j++;
    }
  }

  for (let d = 0; d < n; d++) {
    let i = d;
    let j = 0;
    const curDiagonal: number[] = [];

    while (i < n && j < n) {
      curDiagonal.push(grid[i][j]);
      i++;
      j++;
    }

    curDiagonal.sort((a, b) => b - a);

    i = d;
    j = 0;
    while (i < n && j < n) {
      grid[i][j] = curDiagonal[j];
      i++;
      j++;
    }
  }

  return grid;
}

/*
  alternatives
*/
function sortMatrix(grid: number[][]): number[][] {
  const n = grid.length;

  for (let i = 0; i < n; i++) {
    let temp: number[] = [];

    for (let j = 0; j + i < n; j++) {
      temp.push(grid[i + j][j]);
    }

    temp.sort((a, b) => b - a);

    for (let j = 0; j + i < n; j++) {
      grid[i + j][j] = temp[j];
    }
  }

  for (let j = 1; j < n; j++) {
    let temp: number[] = [];

    for (let i = 0; i + j < n; i++) {
      temp.push(grid[i][i + j]);
    }

    temp.sort((a, b) => a - b);

    for (let i = 0; i + j < n; i++) {
      grid[i][i + j] = temp[i];
    }
  }

  return grid;
}

export { sortMatrix };
