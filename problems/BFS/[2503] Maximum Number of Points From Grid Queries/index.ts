import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function maxPoints(grid: number[][], queries: number[]): number[] {
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const qs = queries
    .reduce<number[][]>((a, c, i) => {
      a.push([c, i]);
      return a;
    }, [])
    .sort((a, b) => a[0] - b[0]);
  const res = Array.from({ length: qs.length }, () => 0);

  // [grid value, x, y]
  const pq = new MinPriorityQueue((el: number[]) => el[0]);
  pq.enqueue([grid[0][0], 0, 0]);

  const m = grid.length;
  const n = grid[0].length;
  const visited = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
  visited[0][0] = true;

  let count = 0;

  for (const [q, idx] of qs) {
    while (!pq.isEmpty() && pq.front()![0] < q) {
      const [_v, i, j] = pq.dequeue()!;
      count++;

      for (let k = 0; k < 4; k++) {
        const x = i + dir[k][0];
        const y = j + dir[k][1];

        if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) {
          continue;
        }

        pq.enqueue([grid[x][y], x, y]);
        visited[x][y] = true;
      }
    }

    res[idx] = count;
  }

  return res;
}

export { maxPoints };
