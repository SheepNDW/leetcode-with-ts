function totalFruit(fruits: number[]): number {
  const n = fruits.length;
  const map = new Map<number, number>();
  let res = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    while (j < i && map.size === 2 && !map.has(fruits[i])) {
      const count = map.get(fruits[j]) || 0;
      if (count - 1 === 0) {
        map.delete(fruits[j]);
      } else {
        map.set(fruits[j], count - 1);
      }
      j++;
    }
    map.set(fruits[i], (map.get(fruits[i]) || 0) + 1);
    res = Math.max(res, i - j + 1);
  }

  return res;
}

export { totalFruit };
