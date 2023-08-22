function convertToTitle(columnNumber: number): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  while (columnNumber > 0) {
    columnNumber--; // 1-based to 0-based
    const rem = columnNumber % 26;
    result = letters[rem] + result;
    columnNumber = ~~(columnNumber / 26);
  }

  return result;
}

export { convertToTitle };
