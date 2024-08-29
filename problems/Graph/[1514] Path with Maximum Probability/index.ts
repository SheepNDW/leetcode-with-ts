import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/*
  max p1 * p2 * p3 *...
  max log(p1 * p2 * p3 *...)
  max log(p1) + log(p2) + log(p3) +...
  min -log(p1) + -log(p2) + -log(p3) +...
*/
function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start_node: number,
  end_node: number
): number {
  const adj: [number, number][][] = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
    const a = edges[i][0];
    const b = edges[i][1];
    const p = succProb[i];
    adj[a].push([p, b]);
    adj[b].push([p, a]);
  }

  const pq = new MaxPriorityQueue({ priority: (el: [number, number]) => el[0] });
  pq.enqueue([1, start_node]);
  const visited = new Set<number>();

  while (!pq.isEmpty()) {
    const [prob, cur] = pq.dequeue().element;

    if (cur === end_node) return prob;

    visited.add(cur);

    for (const [edgeProb, nei] of adj[cur]) {
      if (!visited.has(nei)) {
        pq.enqueue([prob * edgeProb, nei]);
      }
    }
  }

  return 0;
}

export { maxProbability };
