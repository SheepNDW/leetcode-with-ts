function largestSubmatrix(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const histogram = Array.from({ length: n }, () => 0);
  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        histogram[j] += 1;
      } else {
        histogram[j] = 0;
      }
    }

    const sortedHistogram = [...histogram].sort((a, b) => b - a);

    // 計算最大子矩陣面積
    for (let j = 0; j < n; j++) {
      const area = sortedHistogram[j] * (j + 1);
      result = Math.max(result, area);
    }
  }

  return result;
}

export { largestSubmatrix };
