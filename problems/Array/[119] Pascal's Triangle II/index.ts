function getRow0(rowIndex: number): number[] {
  const triangle: number[][] = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    const prevRow: number[] = triangle[i - 1];
    const row: number[] = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(prevRow[j - 1] + prevRow[j]);
      }
    }

    triangle.push(row);
  }

  return triangle[rowIndex];
}

// space optimized
function getRow1(rowIndex: number): number[] {
  let prevRow: number[] = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const currRow: number[] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        currRow.push(prevRow[j - 1] + prevRow[j]);
      }
    }
    prevRow = currRow;
  }

  return prevRow;
}

// math
function getRow(rowIndex: number): number[] {
  const row: number[] = [];
  for (let k = 0; k <= rowIndex; k++) {
    // C(n, k) = C(n, k - 1) * (n - k + 1) / k
    let value = 1;
    if (k > 0) {
      value = (row[k - 1] * (rowIndex - k + 1)) / k;
    }
    row.push(value);
  }
  return row;
}

export { getRow };
