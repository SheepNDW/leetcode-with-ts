/*
  dp_B[i][j]: the maximum number of fruits collected when B goes to (i, j) from (0, n-1)

  (i, j) can be reached by:
  - (i-1, j-1)
  - (i-1, j)
  - (i-1, j+1)

  dp_B[i][j] = max(dp_B[i-1][j-1], dp_B[i-1][j], dp_B[i-1][j+1]) + fruits[i][j]


  dp_C[i][j]: the maximum number of fruits collected when C goes to (i, j) from (n-1, 0)

  (i, j) can be reached by:

  - (i+1, j-1)
  - (i, j-1)
  - (i-1, j-1)

  dp_C[i][j] = max(dp_C[i+1][j-1], dp_C[i][j-1], dp_C[i-1][j-1]) + fruits[i][j]
*/
function maxCollectedFruits0(fruits: number[][]): number {
  const n = fruits.length;

  let res = 0;
  for (let i = 0; i < n; i++) {
    res += fruits[i][i];
  }

  const dp_B = Array.from({ length: n }, () => Array(n).fill(-Infinity));
  dp_B[0][n - 1] = fruits[0][n - 1];

  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const fromTopLeft = dp_B[i - 1][j - 1];
      const fromTop = dp_B[i - 1][j];
      const fromTopRight = j < n - 1 ? dp_B[i - 1][j + 1] : -Infinity;

      dp_B[i][j] = Math.max(fromTopLeft, fromTop, fromTopRight) + fruits[i][j];
    }
  }

  const dp_C = Array.from({ length: n }, () => Array(n).fill(-Infinity));
  dp_C[n - 1][0] = fruits[n - 1][0];

  for (let j = 1; j < n - 1; j++) {
    for (let i = Math.max(n - 1 - j, j + 1); i < n; i++) {
      const fromBottomLeft = i < n - 1 ? dp_C[i + 1][j - 1] : -Infinity;
      const fromLeft = dp_C[i][j - 1];
      const fromTopLeft = dp_C[i - 1][j - 1];

      dp_C[i][j] = Math.max(fromBottomLeft, fromLeft, fromTopLeft) + fruits[i][j];
    }
  }

  res += dp_B[n - 2][n - 1] + dp_C[n - 1][n - 2];
  return res;
}

/*
  1D DP Array and flipping the matrix along the main diagonal
*/
function maxCollectedFruits(fruits: number[][]): number {
  const n = fruits.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    res += fruits[i][i];
  }

  const dp = () => {
    let prev = Array(n).fill(-Infinity);
    let curr = Array(n).fill(-Infinity);
    prev[n - 1] = fruits[0][n - 1];

    for (let i = 1; i < n - 1; i++) {
      for (let j = Math.max(i + 1, n - 1 - i); j < n; j++) {
        const fromTopLeft = prev[j - 1];
        const fromTop = prev[j];
        const fromTopRight = j < n - 1 ? prev[j + 1] : -Infinity;

        curr[j] = Math.max(fromTopLeft, fromTop, fromTopRight) + fruits[i][j];
      }
      [prev, curr] = [curr, prev];
    }

    return prev[n - 1];
  };

  res += dp();

  // flip the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = fruits[i][j];
      fruits[i][j] = fruits[j][i];
      fruits[j][i] = temp;
    }
  }

  res += dp();
  return res;
}

export { maxCollectedFruits };
