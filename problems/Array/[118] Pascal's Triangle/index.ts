function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const triangle = [[1], [1, 1]];
  for (let i = 3; i <= numRows; i++) {
    const row: number[] = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        row.push(1);
      } else {
        row.push(triangle[i - 2][j] + triangle[i - 2][j - 1]);
      }
    }
    triangle.push(row);
  }

  return triangle;
}

export { generate };
