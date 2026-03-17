function largestSubmatrix(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const hist = Array.from({ length: n }, () => 0);
  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        hist[j] += 1;
      } else {
        hist[j] = 0;
      }
    }

    const sortedHistogram = [...hist].sort((a, b) => b - a);

    // 計算最大子矩陣面積
    for (let j = 0; j < n; j++) {
      const area = sortedHistogram[j] * (j + 1);
      res = Math.max(res, area);
    }
  }

  return res;
}

export { largestSubmatrix };
