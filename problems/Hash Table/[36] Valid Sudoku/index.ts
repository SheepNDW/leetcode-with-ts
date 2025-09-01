function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const number = board[i][j];

      if (number === '.') continue;

      const rowKey = `row-${i}-${number}`;
      const colKey = `col-${j}-${number}`;
      const boxKey = `box-${Math.floor(i / 3)}-${Math.floor(j / 3)}-${number}`;

      if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
        return false;
      }

      seen.add(rowKey);
      seen.add(colKey);
      seen.add(boxKey);
    }
  }

  return true;
}

export { isValidSudoku };
