// brute force (TLE)
function minFallingPathSum0(matrix: number[][]): number {
  const n = matrix.length;
  let minSum = Infinity;

  function dfs(row: number, col: number, currSum: number) {
    if (col < 0 || col >= n) return;

    if (row === n) {
      minSum = Math.min(minSum, currSum);
    } else {
      currSum += matrix[row][col];
      dfs(row + 1, col + 1, currSum);
      dfs(row + 1, col, currSum);
      dfs(row + 1, col - 1, currSum);
    }
  }

  for (let i = 0; i < n; i++) {
    dfs(0, i, 0);
  }

  return minSum;
}

// memoization
function minFallingPathSum1(matrix: number[][]): number {
  const n = matrix.length;
  const memo: Record<string, number> = {};

  function dfs(row: number, col: number) {
    const key = `${row}-${col}`;
    if (memo[key] !== undefined) return memo[key];
    if (row === n) return 0;

    let left = Infinity;
    let down = Infinity;
    let right = Infinity;

    if (col > 0) left = dfs(row + 1, col - 1);
    down = dfs(row + 1, col);
    if (col < n - 1) right = dfs(row + 1, col + 1);

    memo[key] = matrix[row][col] + Math.min(left, down, right);
    return memo[key];
  }

  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, dfs(0, i));
  }
  return ans;
}

// dp
// dp[i][j]: the minimun sum of falling path from row 0 -> (i, j)
// ==>  dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1]) + A[i][j]
function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length;
  const dp: number[][] = JSON.parse(JSON.stringify(matrix));

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      if (j + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j + 1]);
      dp[i][j] += matrix[i][j];
    }
  }

  let ans = Infinity;
  for (let j = 0; j < n; j++) {
    ans = Math.min(ans, dp[n - 1][j]);
  }
  return ans;
}

export { minFallingPathSum };
