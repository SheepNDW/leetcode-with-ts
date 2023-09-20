function kWeakestRows(mat: number[][], k: number): number[] {
  const soldiers: number[][] = mat.map((row, i) => [i, row.reduce((a, b) => a + b)]);
  soldiers.sort((a, b) => a[1] - b[1]);

  return soldiers.slice(0, k).map((item) => item[0]);
}

export { kWeakestRows };
