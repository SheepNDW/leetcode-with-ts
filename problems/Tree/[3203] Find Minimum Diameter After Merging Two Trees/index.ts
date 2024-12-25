function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {
  const d1 = treeDiameter(edges1);
  const d2 = treeDiameter(edges2);

  return Math.max(d1, d2, Math.ceil(d1 / 2) + Math.ceil(d2 / 2) + 1);
}

function treeDiameter(edges: number[][]): number {
  const n = edges.length + 1;
  const next = Array.from({ length: n }, () => [] as number[]);

  for (const [from, to] of edges) {
    next[from].push(to);
    next[to].push(from);
  }

  const [farthestNode] = bfs(next, 0);
  const [, diameter] = bfs(next, farthestNode);

  return diameter;

  function bfs(next: number[][], start: number): [number, number] {
    const n = next.length;
    const dist = Array.from({ length: n }, () => -1);
    const queue = [start];

    dist[start] = 0;

    while (queue.length) {
      const node = queue.shift()!;

      for (const neighbor of next[node]) {
        if (dist[neighbor] === -1) {
          queue.push(neighbor);
          dist[neighbor] = dist[node] + 1;
        }
      }
    }

    let maxDist = 0;
    let farthestNode = start;

    for (let i = 0; i < n; i++) {
      if (dist[i] > maxDist) {
        maxDist = dist[i];
        farthestNode = i;
      }
    }

    return [farthestNode, maxDist];
  }
}

export { minimumDiameterAfterMerge };
