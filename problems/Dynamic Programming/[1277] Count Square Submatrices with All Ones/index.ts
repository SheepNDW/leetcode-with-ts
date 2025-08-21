/*
  brute force
*/
function countSquares0(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;

  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) continue;

      for (let side = 1; side <= Math.min(m, n); side++) {
        res += check(i, j, side);
      }
    }
  }

  return res;

  function check(row: number, col: number, side: number) {
    for (let i = 0; i < side; i++) {
      for (let j = 0; j < side; j++) {
        const r = row + i;
        const c = col + j;
        if (r >= m || c >= n || matrix[r][c] !== 1) return 0;
      }
    }
    return 1;
  }
}

/*
  matrix[i][j] = 1
  dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
*/
function countSquares(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;

  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  let count = 0;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 1) {
      dp[i][0] = 1;
      count++;
    }
  }

  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 1) {
      dp[0][j] = 1;
      count++;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) continue;

      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      count += dp[i][j];
    }
  }

  return count;
}

export { countSquares };
