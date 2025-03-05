function coloredCells0(n: number): number {
  let res = 1;

  for (let i = 0; i < n; i++) {
    res += 4 * i;
  }

  return res;
}

/*
  Math
*/
function coloredCells(n: number): number {
  return 1 + 2 * (n - 1) * n;
}

export { coloredCells };
