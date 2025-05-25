/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes0(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  const row = Array(m).fill(0);
  const col = Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (row[i] === 1) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 0; j < n; j++) {
    if (col[j] === 1) {
      for (let i = 0; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }
}

// constant space solution
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) firstColZero = true;
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) firstRowZero = true;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}

export { setZeroes };
