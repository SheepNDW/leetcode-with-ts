function maximalRectangle(matrix: string[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const hist: number[] = new Array(n).fill(0);
  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == '1') {
        hist[j] = hist[j] + 1;
      } else {
        hist[j] = 0;
      }
    }
    result = Math.max(result, largestRectangleArea(hist));
  }

  return result;
}

function largestRectangleArea(heights: number[]) {
  const hist = [...heights];
  hist.unshift(0);
  hist.push(0);
  const stack: number[] = [];

  let result = 0;
  for (let i = 0; i < hist.length; i++) {
    while (stack.length && hist[stack[stack.length - 1]] > hist[i]) {
      const h = hist[stack.pop()!];
      const w = i - stack[stack.length - 1] - 1;
      result = Math.max(result, h * w);
    }
    stack.push(i);
  }

  return result;
}

export { maximalRectangle };
