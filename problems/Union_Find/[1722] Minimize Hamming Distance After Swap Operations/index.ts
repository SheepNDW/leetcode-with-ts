function minimumHammingDistance(
  source: number[],
  target: number[],
  allowedSwaps: number[][],
): number {
  const n = source.length;
  const Father = Array.from({ length: n }, (_, i) => i);

  let res = 0;

  for (const [a, b] of allowedSwaps) {
    if (FindFather(a) !== FindFather(b)) {
      Union(a, b);
    }
  }

  const map = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const group = map.get(FindFather(i)) ?? [];
    group.push(i);
    map.set(FindFather(i), group);
  }

  for (const group of map.values()) {
    const count = new Map<number, number>();
    for (const i of group) {
      count.set(source[i], (count.get(source[i]) ?? 0) + 1);
    }

    for (const i of group) {
      const value = target[i];

      if ((count.get(value) ?? 0) > 0) {
        count.set(value, (count.get(value) ?? 0) - 1);
      } else {
        res++;
      }
    }
  }

  return res;

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

export { minimumHammingDistance };
