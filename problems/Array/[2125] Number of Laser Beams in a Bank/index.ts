function numberOfBeams(bank: string[]): number {
  const m = bank.length;
  const n = bank[0].length;
  let ans = 0;

  let prevRow = 0;
  for (const num of bank[0]) {
    if (num === '1') prevRow++;
  }

  let currRow = 0;

  for (let row = 1; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (bank[row][col] === '1') {
        currRow++;
      }
    }
    if (currRow > 0) {
      ans += prevRow * currRow;
      prevRow = currRow;
      currRow = 0;
    }
  }

  return ans;
}

export { numberOfBeams };
