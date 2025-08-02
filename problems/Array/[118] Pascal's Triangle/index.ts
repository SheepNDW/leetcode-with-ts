function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];

  const res = [[1]];
  for (let i = 2; i <= numRows; i++) {
    const cur = res[res.length - 1];
    const next = [cur[0]];
    for (let j = 1; j < cur.length; j++) {
      next.push(cur[j] + cur[j - 1]);
    }
    next.push(cur[cur.length - 1]);
    res.push(next);
  }

  return res;
}

export { generate };
