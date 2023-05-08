// function diagonalSum(mat: number[][]): number {
//   const matLength = mat.length;
//   const midIndex = ~~(matLength / 2);
//   let primarySum = 0;
//   let secondarySum = 0;

//   for (let i = 0; i < matLength; i++) {
//     primarySum += mat[i][i];
//     secondarySum += mat[i][matLength - 1 - i];
//   }

//   return matLength % 2
//     ? primarySum + secondarySum - mat[midIndex][midIndex]
//     : primarySum + secondarySum;
// }

// ==== Alternatives ====
function diagonalSum(mat: number[][]): number {
  let n = mat.length - 1;
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j || n - i === j || n - j === i) {
        sum += mat[i][j];
      }
    }
  }

  return sum;
}

export { diagonalSum };
