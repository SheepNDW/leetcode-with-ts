function solveNQueens(n: number): string[][] {
  const res: string[][] = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  dfs(0);
  return res;

  function dfs(row: number) {
    if (row === n) {
      const curr = board.map((b) => b.join(''));
      res.push(curr);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        dfs(row + 1);
        board[row][col] = '.';
      }
    }
  }

  function isValid(row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    for (let j = 0; j < col; j++) {
      if (board[row][j] === 'Q') return false;
    }

    let k = 1;
    while (row - k >= 0 && col - k >= 0) {
      if (board[row - k][col - k] === 'Q') return false;
      k++;
    }

    k = 1;
    while (row - k >= 0 && col + k < n) {
      if (board[row - k][col + k] === 'Q') return false;
      k++;
    }

    return true;
  }
}

export { solveNQueens };
