function lexicalOrder(n: number): number[] {
  const res: number[] = [1];
  let cur = 1;

  while (res.length < n) {
    if (cur * 10 <= n) {
      cur = cur * 10;
      res.push(cur);
    } else {
      while (cur + 1 > n || cur % 10 === 9) {
        cur = Math.floor(cur / 10);
      }
      cur += 1;
      res.push(cur);
    }
  }

  return res;
}

export { lexicalOrder };
