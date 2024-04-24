function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const next: number[][] = Array.from({ length: n }, () => []);
  const degree = Array.from({ length: n }, () => 0);

  for (const [a, b] of edges) {
    degree[a]++;
    degree[b]++;
    next[a].push(b);
    next[b].push(a);
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length > 0) {
    let len = queue.length;

    while (len--) {
      const cur = queue.shift()!;
      count++;

      for (const nextNode of next[cur]) {
        degree[nextNode]--;
        if (degree[nextNode] === 1) {
          queue.push(nextNode);
        }
      }
    }

    if (count === n - 1 || count === n - 2) break;
  }

  return queue;
}

export { findMinHeightTrees };
