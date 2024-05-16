/*
  grid[i][j]: the distance from (i,j) to its nearest thief + 1
*/
interface Coordinate {
  x: number;
  y: number;
}
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function maximumSafenessFactor(grid: number[][]): number {
  const n = grid.length;
  const queue: Coordinate[] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push({ x: i, y: j });
      }
    }
  }

  while (queue.length) {
    const { x, y } = queue.shift()!;
    for (let k = 0; k < 4; k++) {
      const i = x + dir[k][0];
      const j = y + dir[k][1];
      if (i < 0 || i >= n || j < 0 || j >= n) continue;
      if (grid[i][j] !== 0) continue;
      grid[i][j] = grid[x][y] + 1;
      queue.push({ x: i, y: j });
    }
  }

  let left = 0;
  let right = 0;
  for (const row of grid) {
    for (const cell of row) {
      right = Math.max(right, cell);
    }
  }

  while (left < right) {
    const mid = Math.ceil((right + left) / 2);

    if (isOK(mid, grid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function isOK(d: number, grid: number[][]): boolean {
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const queue: Coordinate[] = [];

  if (grid[0][0] <= d) return false;

  queue.push({ x: 0, y: 0 });
  visited[0][0] = true;

  while (queue.length) {
    const { x, y } = queue.shift()!;
    for (let k = 0; k < 4; k++) {
      const i = x + dir[k][0];
      const j = y + dir[k][1];
      if (i < 0 || i >= n || j < 0 || j >= n) continue;
      if (visited[i][j] || grid[i][j] <= d) continue;

      if (i === n - 1 && j === n - 1) return true;
      visited[i][j] = true;
      queue.push({ x: i, y: j });
    }
  }

  return false;
}

export { maximumSafenessFactor };
