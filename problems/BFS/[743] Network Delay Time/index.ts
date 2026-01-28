import { PriorityQueue } from '@datastructures-js/priority-queue';

/*
  Dijkstra (bfs + pq)
*/
function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph: [v: number, w: number][][] = Array.from({ length: n + 1 }, () => []);

  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  const pq = new PriorityQueue<[node: number, dist: number]>((a, b) => a[1] - b[1]);
  pq.push([k, 0]);

  const visited = new Set<number>();
  let maxDist = 0;

  while (!pq.isEmpty()) {
    const [cur, d] = pq.pop()!;

    if (visited.has(cur)) continue;
    visited.add(cur);

    maxDist = Math.max(maxDist, d);

    for (const [next, w] of graph[cur]) {
      pq.push([next, d + w]);
    }
  }

  return visited.size === n ? maxDist : -1;
}

/*
  Floyd (n^3)
  
  dp[i][j]: the shortest distance from i to j
*/
function networkDelayTime1(times: number[][], n: number, k: number): number {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  for (const [u, v, w] of times) {
    dp[u][v] = w;
  }
  for (let i = 1; i <= n; i++) {
    dp[i][i] = 0;
  }

  for (let k = 1; k <= n; k++) {
    // update dp[i][j]
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }

  let maxDist = 0;
  for (let i = 1; i <= n; i++) {
    maxDist = Math.max(maxDist, dp[k][i]);
  }

  return maxDist === Infinity ? -1 : maxDist;
}

export { networkDelayTime };
