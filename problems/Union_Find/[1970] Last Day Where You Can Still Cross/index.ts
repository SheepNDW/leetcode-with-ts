// binary search + BFS
function latestDayToCross0(row: number, col: number, cells: number[][]): number {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const n = cells.length;
  let left = 0;
  let right = n + 1;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (canCross(mid)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // left is the first day we cannot cross
  return left - 1;

  function canCross(day: number): boolean {
    if (day > n) return false;

    const grid: number[][] = Array.from({ length: row }, () => Array(col).fill(0));

    for (let i = 0; i < day; i++) {
      const [r, c] = cells[i];
      grid[r - 1][c - 1] = 1;
    }

    const visited: boolean[][] = Array.from({ length: row }, () => Array(col).fill(false));
    const queue: [number, number][] = [];

    // 一次把第一列還可以走的點加入 queue
    for (let c = 0; c < col; c++) {
      if (grid[0][c] === 0) {
        visited[0][c] = true;
        queue.push([0, c]);
      }
    }

    // 由於 queue.shift() 會是 O(n)，改用 for 迴圈模擬 queue 行為
    // `i` 指向 queue 的頭
    for (let i = 0; i < queue.length; i++) {
      const [r, c] = queue[i];

      if (r === row - 1) return true;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue;
        if (visited[nr][nc] || grid[nr][nc] === 1) continue;

        visited[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }

    return false;
  }
}

// Union-Find
function latestDayToCross(row: number, col: number, cells: number[][]): number {
  const father: number[] = [];

  function findFather(x: number): number {
    if (father[x] !== x) {
      father[x] = findFather(father[x]);
    }
    return father[x];
  }

  function union(x: number, y: number): void {
    const rootX = findFather(x);
    const rootY = findFather(y);

    if (rootX === rootY) return;

    if (rootX < rootY) {
      father[rootY] = rootX;
    } else {
      father[rootX] = rootY;
    }
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const m = row;
  const n = col;
  father.length = m * n + 2;

  for (let i = 0; i < m * n + 2; i++) {
    father[i] = i;
  }

  const grid: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  for (const [r, c] of cells) {
    grid[r - 1][c - 1] = 1;
  }

  for (let j = 0; j < n; j++) {
    union(0 * n + j, m * n);
    union((m - 1) * n + j, m * n + 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) continue;

      for (const [dr, dc] of directions) {
        const x = i + dr;
        const y = j + dc;

        if (x < 0 || x >= m || y < 0 || y >= n) continue;
        if (grid[x][y] === 1) continue;

        if (findFather(i * n + j) !== findFather(x * n + y)) {
          union(i * n + j, x * n + y);
        }
      }
    }
  }

  for (let t = cells.length - 1; t >= 0; t--) {
    if (findFather(m * n) === findFather(m * n + 1)) return t + 1;

    const [r, c] = cells[t];
    grid[r - 1][c - 1] = 0;

    for (const [dr, dc] of directions) {
      const x = r - 1 + dr;
      const y = c - 1 + dc;

      if (x < 0 || x >= m || y < 0 || y >= n) continue;
      if (grid[x][y] === 1) continue;

      if (findFather((r - 1) * n + (c - 1)) !== findFather(x * n + y)) {
        union((r - 1) * n + (c - 1), x * n + y);
      }
    }
  }

  return 0;
}

export { latestDayToCross };
