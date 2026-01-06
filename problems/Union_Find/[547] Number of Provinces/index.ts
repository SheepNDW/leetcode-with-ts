function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const Father = Array.from({ length: n }, (_, i) => i);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && isConnected[i][j] === 1) {
        if (FindFather(i) !== FindFather(j)) {
          Union(i, j);
        }
      }
    }
  }

  const set = new Set();

  for (let i = 0; i < n; i++) {
    set.add(FindFather(i));
  }

  return set.size;

  function FindFather(x: number): number {
    if (Father[x] !== x) {
      Father[x] = FindFather(Father[x]);
    }
    return Father[x];
  }

  function Union(x: number, y: number): void {
    x = FindFather(x);
    y = FindFather(y);

    if (x <= y) {
      Father[y] = x;
    } else {
      Father[x] = y;
    }
  }
}

export { findCircleNum };
