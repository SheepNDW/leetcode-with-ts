import { PriorityQueue } from '@datastructures-js/priority-queue';

function swimInWater(grid: number[][]): number {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const pq = new PriorityQueue<[h: number, x: number, y: number]>((a, b) => a[0] - b[0]);
  pq.push([grid[0][0], 0, 0]);

  let res = 0;

  while (!pq.isEmpty()) {
    const [h, x, y] = pq.pop()!;
    if (visited[x][y]) continue;
    visited[x][y] = true;

    res = Math.max(res, h);
    if (x === n - 1 && y === n - 1) return res;

    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i < 0 || i >= n || j < 0 || j >= n || visited[i][j]) {
        continue;
      }

      pq.push([grid[i][j], i, j]);
    }
  }

  return -1;
}

export { swimInWater };
