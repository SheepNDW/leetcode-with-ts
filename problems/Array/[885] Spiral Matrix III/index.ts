function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
  const res = [[rStart, cStart]];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let steps = 1;
  let d = 0;
  let count = 1;

  while (count < rows * cols) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < steps; j++) {
        rStart += directions[d][0];
        cStart += directions[d][1];

        if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
          res.push([rStart, cStart]);
          count++;
        }
      }

      d = (d + 1) % 4;
    }
    steps++;
  }

  return res;
}

export { spiralMatrixIII };
