import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function trapRainWater(heightMap: number[][]): number {
  const m = heightMap.length;
  const n = heightMap[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // [h, x, y]
  const pq = new MinPriorityQueue((el: number[]) => el[0]);
  const visited = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        visited[i][j] = 1;
        pq.push([heightMap[i][j], i, j]);
      }
    }
  }

  let res = 0;
  let waterLevel = 0;
  while (!pq.isEmpty()) {
    const [h, x, y] = pq.pop()!;

    if (h > waterLevel) waterLevel = h;
    res += waterLevel - h;

    for (const [dx, dy] of dir) {
      const i = x + dx;
      const j = y + dy;

      if (i < 0 || i >= m || j < 0 || j >= n) continue;
      if (visited[i][j]) continue;
      visited[i][j] = 1;
      pq.push([heightMap[i][j], i, j]);
    }
  }

  return res;
}

export { trapRainWater };
