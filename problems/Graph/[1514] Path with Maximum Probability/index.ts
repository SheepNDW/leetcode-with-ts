import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/*
  max p1 * p2 * p3 *...
*/
function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start_node: number,
  end_node: number
): number {
  // adj[i] -> [next, prob]
  const adj: [number, number][][] = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
    const a = edges[i][0];
    const b = edges[i][1];
    const p = succProb[i];
    adj[a].push([b, p]);
    adj[b].push([a, p]);
  }

  // [prob, node]
  const pq = new MaxPriorityQueue((el: [number, number]) => el[0]);
  pq.enqueue([1, start_node]);
  const visited = new Set<number>();

  while (!pq.isEmpty()) {
    const [prob, cur] = pq.dequeue()!;
    visited.add(cur);

    if (cur === end_node) return prob;

    for (const [next, edgeProb] of adj[cur]) {
      if (!visited.has(next)) {
        pq.enqueue([prob * edgeProb, next]);
      }
    }
  }

  return 0;
}

export { maxProbability };
