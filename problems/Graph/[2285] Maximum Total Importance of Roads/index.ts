function maximumImportance(n: number, roads: number[][]): number {
  const edgeCount = Array.from({ length: n }, () => 0);

  for (const [n1, n2] of roads) {
    edgeCount[n1] += 1;
    edgeCount[n2] += 1;
  }

  edgeCount.sort((a, b) => a - b);

  let label = 1;
  let res = 0;

  for (const count of edgeCount) {
    res += label * count;
    label += 1;
  }

  return res;
}

export { maximumImportance };
