import { PriorityQueue } from '@datastructures-js/priority-queue';

function minCost0(n: number, edges: number[][]): number {
  const outEdges: [to: number, cost: number][][] = Array.from({ length: n }, () => []);
  const inEdges: [to: number, cost: number][][] = Array.from({ length: n }, () => []);

  for (const [u, v, w] of edges) {
    outEdges[u].push([v, w]);
    inEdges[v].push([u, w]); // 從 u 指向 v 的入邊
  }

  const dist: number[] = Array(n).fill(Infinity);
  dist[0] = 0;

  const pq = new PriorityQueue((a: number[], b: number[]) => a[0] - b[0]);
  pq.push([0, 0]); // [dist, node]

  while (!pq.isEmpty()) {
    const [d, u] = pq.pop()!;

    // 如果這個狀態已經過期 (dist[u] 的最新值) 就跳過
    if (d !== dist[u]) continue;

    // 已經拿到終點的最短距離，可以提前結束
    if (u === n - 1) return d;

    // 正向邊: u -> v, cost = w
    for (const [v, w] of outEdges[u]) {
      const newDist = d + w;
      if (newDist < dist[v]) {
        dist[v] = newDist;
        pq.push([newDist, v]);
      }
    }

    // 反向邊: v -> u, cost = 2 * w
    for (const [v, w] of inEdges[u]) {
      const newDist = d + 2 * w;
      if (newDist < dist[v]) {
        dist[v] = newDist;
        pq.push([newDist, v]);
      }
    }
  }

  return -1;
}

/*
  把 outEdges / inEdges 合併成同一張加權圖
*/
function minCost(n: number, edges: number[][]): number {
  const graph: [to: number, cost: number][][] = Array.from({ length: n }, () => []);

  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, 2 * w]);
  }

  const dist: number[] = Array(n).fill(Infinity);
  dist[0] = 0;

  const pq = new PriorityQueue<[dist: number, node: number]>((a, b) => a[0] - b[0]);
  pq.push([0, 0]);

  const visited: boolean[] = Array(n).fill(false);

  while (!pq.isEmpty()) {
    const [curDist, node] = pq.pop()!;

    if (visited[node]) continue;
    visited[node] = true;

    if (node === n - 1) return curDist;

    for (const [nextNode, cost] of graph[node]) {
      const newDist = curDist + cost;
      if (newDist < dist[nextNode]) {
        dist[nextNode] = newDist;
        pq.push([newDist, nextNode]);
      }
    }
  }

  return -1;
}

export { minCost };
