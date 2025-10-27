function numberOfBeams(bank: string[]): number {
  const m = bank.length;
  const n = bank[0].length;

  let res = 0;
  let prev = 0;

  for (let i = 0; i < m; i++) {
    let cur = 0;

    for (let j = 0; j < n; j++) {
      if (bank[i][j] === '1') cur++;
    }

    if (cur !== 0) {
      res += prev * cur;
      prev = cur;
    }
  }

  return res;
}

export { numberOfBeams };
