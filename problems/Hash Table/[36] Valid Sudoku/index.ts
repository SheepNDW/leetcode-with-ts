// function isValidSudoku(board: string[][]): boolean {
//   // check row
//   for (const row of board) {
//     if (!checkLine(row)) return false;
//   }

//   // check col
//   for (let col = 0; col < 9; col++) {
//     const hash: Record<string, boolean> = {};

//     for (let row = 0; row < 9; row++) {
//       const digit = board[row][col];
//       if (digit !== '.' && hash[digit]) return false;
//       hash[digit] = true;
//     }
//   }

//   // check grid
//   for (let row = 0; row < 9; row += 3) {
//     for (let col = 0; col < 9; col += 3) {
//       if (!checkSudokuGrid(board, row, col)) return false;
//     }
//   }
//   return true;
// }

// function checkLine(row: string[]) {
//   const hash: Record<string, boolean> = {};

//   for (const digit of row) {
//     if (digit !== '.' && hash[digit]) return false;
//     hash[digit] = true;
//   }

//   return true;
// }

// function checkSudokuGrid(board: string[][], row: number, col: number) {
//   const hash: Record<string, boolean> = {};

//   for (let i = row; i < row + 3; i++) {
//     for (let j = col; j < col + 3; j++) {
//       const digit = board[i][j];
//       if (digit !== '.' && hash[digit]) return false;
//       hash[digit] = true;
//     }
//   }

//   return true;
// }

function isValidSudoku(board: string[][]): boolean {
  const rows: Record<string, boolean>[] = Array.from({ length: 9 }, () => ({}));
  const cols: Record<string, boolean>[] = Array.from({ length: 9 }, () => ({}));
  const boxes: Record<string, boolean>[] = Array.from({ length: 9 }, () => ({}));

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const digit = board[row][col];
      if (digit === '.') continue;

      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (rows[row][digit] || cols[col][digit] || boxes[boxIndex][digit]) {
        return false;
      }

      rows[row][digit] = true;
      cols[col][digit] = true;
      boxes[boxIndex][digit] = true;
    }
  }

  return true;
}

export { isValidSudoku };
