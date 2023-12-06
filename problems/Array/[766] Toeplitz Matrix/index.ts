function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let row = 0; row < m - 1; row++) {
    for (let col = 0; col < n - 1; col++) {
      if (matrix[row][col] !== matrix[row + 1][col + 1]) {
        return false;
      }
    }
  }

  return true;
}

export { isToeplitzMatrix };
