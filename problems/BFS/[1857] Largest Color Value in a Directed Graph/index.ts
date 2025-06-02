import { Queue } from '@datastructures-js/queue';

function largestPathValue(colors: string, edges: number[][]): number {
  const n = colors.length;
  const graph: number[][] = Array.from({ length: n }, () => []);
  const indegree = new Array<number>(n).fill(0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    indegree[v]++;
  }

  let res = 1;
  for (const ch of new Set(colors)) {
    const ans = calculate(ch, [...indegree]);
    if (ans === -1) return -1;
    res = Math.max(res, ans);
  }

  return res;

  function calculate(k: string, indegree: number[]): number {
    // count[i]: the number of nodes with color k in the path ending at node i
    const count = new Array<number>(n).fill(0);
    const q = new Queue<number>();
    let visited = 0;
    let ans = 0;

    for (let i = 0; i < n; i++) {
      if (indegree[i] === 0) {
        q.enqueue(i);
        visited++;
        count[i] = colors[i] === k ? 1 : 0;
      }
    }

    while (!q.isEmpty()) {
      const cur = q.dequeue()!;

      for (const next of graph[cur]) {
        count[next] = Math.max(count[next], count[cur] + (colors[next] === k ? 1 : 0));
        ans = Math.max(ans, count[next]);
        indegree[next]--;

        if (indegree[next] === 0) {
          q.enqueue(next);
          visited++;
        }
      }
    }

    return visited === n ? ans : -1;
  }
}

export { largestPathValue };
