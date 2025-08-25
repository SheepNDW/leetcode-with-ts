/*
  simulate
*/
function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;
  const res: number[] = [];
  const total = m + n - 1;

  for (let d = 0; d < total; d++) {
    if (d % 2 === 0) {
      // 偶數：往右上 ↗
      // 起點：row 取 min(d, m-1)，col = d - row（夾住在 [0, n-1] 內）
      let i = Math.min(d, m - 1);
      let j = d - i;
      while (i >= 0 && j < n) {
        res.push(mat[i][j]);
        i--;
        j++;
      }
    } else {
      // 奇數：往左下 ↙
      // 起點：col 取 min(d, n-1)，row = d - col（夾住在 [0, m-1] 內）
      let j = Math.min(d, n - 1);
      let i = d - j;
      while (j >= 0 && i < m) {
        res.push(mat[i][j]);
        i++;
        j--;
      }
    }
  }
  return res;
}

export { findDiagonalOrder };
