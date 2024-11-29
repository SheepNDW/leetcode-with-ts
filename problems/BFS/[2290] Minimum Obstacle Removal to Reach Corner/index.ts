import { Deque } from '@datastructures-js/deque';

function minimumObstacles(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const minObstacles = Array.from({ length: m }, () => Array(n).fill(Infinity));
  minObstacles[0][0] = 0;

  const deque = new Deque([[0, 0, 0]]); // (obstacles, r, c)

  while (!deque.isEmpty()) {
    const [obstacles, r, c] = deque.popFront()!;

    if (r === m - 1 && c === n - 1) {
      return obstacles;
    }

    for (const [dx, dy] of dir) {
      let i = r + dx;
      let j = c + dy;

      if (isValid(grid, i, j) && minObstacles[i][j] === Infinity) {
        if (grid[i][j] === 1) {
          // if it's an obstacle, add 1 to obstacles and push back
          minObstacles[i][j] = obstacles + 1;
          deque.pushBack([obstacles + 1, i, j]);
        } else {
          // if it's an empty cell, keep the obstacle count and push to front
          minObstacles[i][j] = obstacles;
          deque.pushFront([obstacles, i, j]);
        }
      }
    }
  }

  return minObstacles[m - 1][n - 1];
}

function isValid(grid: number[][], row: number, col: number): boolean {
  const m = grid.length;
  const n = grid[0].length;
  return row >= 0 && row < m && col >= 0 && col < n;
}

export { minimumObstacles };
