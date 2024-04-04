function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const isExist = backtrack(i, j, 0);
      if (isExist) return true;
    }
  }

  return false;

  function backtrack(row: number, col: number, i: number): boolean {
    if (row < 0 || row >= m || col < 0 || col >= n) return false;
    if (board[row][col] !== word[i]) return false;
    if (i === word.length - 1) return true;

    const temp = board[row][col];
    board[row][col] = '';

    const isExist =
      backtrack(row - 1, col, i + 1) ||
      backtrack(row + 1, col, i + 1) ||
      backtrack(row, col - 1, i + 1) ||
      backtrack(row, col + 1, i + 1);

    board[row][col] = temp;
    return isExist;
  }
}

export { exist };
