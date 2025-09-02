function solveSudoku(board: string[][]): void {
  function dfs(board: string[][], i: number, j: number) {
    if (i === 9) return true;
    if (j === 9) return dfs(board, i + 1, 0);
    if (board[i][j] !== '.') return dfs(board, i, j + 1);

    for (const char of '123456789') {
      if (!isValid(board, i, j, char)) continue;
      board[i][j] = char;
      if (dfs(board, i, j + 1)) return true;
      board[i][j] = '.';
    }

    return false;
  }

  function isValid(board: string[][], i: number, j: number, char: string) {
    for (let k = 0; k < 9; k++) {
      if (board[i][k] === char) return false;
      if (board[k][j] === char) return false;
    }

    const boxRow = Math.floor(i / 3) * 3;
    const boxCol = Math.floor(j / 3) * 3;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[boxRow + r][boxCol + c] === char) return false;
      }
    }

    return true;
  }

  dfs(board, 0, 0);
}

export { solveSudoku };
