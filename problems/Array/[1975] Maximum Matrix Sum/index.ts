function maxMatrixSum(matrix: number[][]): number {
  const n = matrix.length;
  let total = 0;
  let negCount = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const val = matrix[i][j];
      const abs = Math.abs(val);

      total += abs;
      min = Math.min(min, abs);

      if (val < 0) negCount++;
    }
  }

  if (negCount % 2 === 0) return total;

  return total - 2 * min;
}

export { maxMatrixSum };
