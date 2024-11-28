function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
  const adjacent: number[][] = Array(n)
    .fill(null)
    .map((_, i) => [i + 1]);

  function shortestPath() {
    const queue = [[0, 0]]; // node, length
    const visited = new Set([0]);

    while (queue.length) {
      const [node, length] = queue.shift()!;

      if (node === n - 1) {
        return length;
      }

      for (const nextNode of adjacent[node]) {
        if (!visited.has(nextNode)) {
          queue.push([nextNode, length + 1]);
          visited.add(nextNode);
        }
      }
    }

    return -1;
  }

  const res: number[] = [];

  for (const [src, dst] of queries) {
    adjacent[src].push(dst);
    res.push(shortestPath());
  }

  return res;
}

export { shortestDistanceAfterQueries };
