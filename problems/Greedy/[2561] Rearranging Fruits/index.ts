function minCost(basket1: number[], basket2: number[]): number {
  const map = new Map<number, number>();

  for (const x of basket1) {
    map.set(x, (map.get(x) || 0) + 1);
  }

  for (const x of basket2) {
    map.set(x, (map.get(x) || 0) - 1);
  }

  const arr: number[] = [];
  for (const [k, v] of map) {
    if (v % 2 !== 0) return -1;
    for (let i = 0; i < Math.abs(v) / 2; i++) {
      arr.push(k);
    }
  }

  arr.sort((a, b) => a - b);
  const minValue = Math.min(...map.keys());
  let cost = 0;

  for (let i = 0; i < arr.length / 2; i++) {
    cost += Math.min(arr[i], minValue * 2);
  }

  return cost;
}

export { minCost };
