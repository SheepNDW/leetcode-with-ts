/*
  key: prefix sum

  matrix:
       c1 c2
     0  1  0
  r1 1  1  1
  r2 0  1  0

  sub matrix sums:
       c1 c2
     0  1  1
  r1 1  3  4
  r2 1  4  5

  total = subSum[r2][c2] 
          - subSum[r1-1][c2] 
          - subSum[r2][c1-1] 
          + subSum[r1-1][c1-1]
*/

// TLE!!!
function numSubmatrixSumTarget0(matrix: number[][], target: number): number {
  const m = matrix.length;
  const n = matrix[0].length;

  const subSum: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const top = r > 0 ? subSum[r - 1][c] : 0;
      const left = c > 0 ? subSum[r][c - 1] : 0;
      const topLeft = r > 0 && c > 0 ? subSum[r - 1][c - 1] : 0;
      subSum[r][c] = matrix[r][c] + top + left - topLeft;
    }
  }

  let ans = 0;

  for (let r1 = 0; r1 < m; r1++) {
    for (let r2 = r1; r2 < m; r2++) {
      for (let c1 = 0; c1 < n; c1++) {
        for (let c2 = c1; c2 < n; c2++) {
          const top = r1 > 0 ? subSum[r1 - 1][c2] : 0;
          const left = c1 > 0 ? subSum[r2][c1 - 1] : 0;
          const topLeft = r1 > 0 && c1 > 0 ? subSum[r1 - 1][c1 - 1] : 0;
          const curSum = subSum[r2][c2] - top - left + topLeft;

          if (curSum === target) ans++;
        }
      }
    }
  }

  return ans;
}

// hash map
function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const m = matrix.length;
  const n = matrix[0].length;
  let ans = 0;

  // 計算每一行的前綴和
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] += matrix[i][j - 1];
    }
  }

  // 固定行的範圍，枚舉列的範圍
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const sumMap = new Map<number, number>();
      sumMap.set(0, 1);
      let curSum = 0;

      for (let k = 0; k < m; k++) {
        curSum += matrix[k][j] - (i > 0 ? matrix[k][i - 1] : 0);
        if (sumMap.has(curSum - target)) {
          ans += sumMap.get(curSum - target)!;
        }
        sumMap.set(curSum, (sumMap.get(curSum) || 0) + 1);
      }
    }
  }

  return ans;
}

export { numSubmatrixSumTarget };
