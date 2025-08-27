/*
  可能會超時，需要扁平化 memo 和把邊界判斷 inline 化
*/
function lenOfVDiagonal0(grid: number[][]): number {
  const directions = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  const m = grid.length;
  const n = grid[0].length;

  // [m][n][4][2]
  const memo = Array.from({ length: m }, () =>
    Array.from({ length: n }, () =>
      Array.from({ length: 4 }, () => Array.from({ length: 2 }, () => -1))
    )
  );

  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        for (let d = 0; d < 4; d++) {
          res = Math.max(res, dfs(i, j, d, 1));
        }
      }
    }
  }

  return res;

  function inBounds(i: number, j: number): boolean {
    return i >= 0 && i < m && j >= 0 && j < n;
  }

  function canContinue(from: number, to: number): boolean {
    if (from === 1 || from === 0) return to === 2;
    if (from === 2) return to === 0;
    return false;
  }

  function dfs(row: number, col: number, dir: number, t: number): number {
    if (memo[row][col][dir][t] !== -1) return memo[row][col][dir][t];

    let res = 1;
    let i = row + directions[dir][0];
    let j = col + directions[dir][1];

    if (inBounds(i, j) && canContinue(grid[row][col], grid[i][j])) {
      res = Math.max(res, 1 + dfs(i, j, dir, t));
    }

    if (t === 1) {
      const nextDir = (dir + 1) % 4;
      i = row + directions[nextDir][0];
      j = col + directions[nextDir][1];
      if (inBounds(i, j) && canContinue(grid[row][col], grid[i][j])) {
        res = Math.max(res, 1 + dfs(i, j, nextDir, t - 1));
      }
    }

    memo[row][col][dir][t] = res;
    return res;
  }
}

/*
  flatten memo
*/
function lenOfVDiagonal(grid: number[][]): number {
  const directions = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  const m = grid.length;
  const n = grid[0].length;

  // flatten memo to [m][n][8]，idx = dir*2 + t
  const memo = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array<number>(8).fill(0))
  );

  function dfs(x: number, y: number, dir: number, t: number): number {
    const key = dir * 2 + t;
    if (memo[x][y][key] !== 0) return memo[x][y][key];

    const curr = grid[x][y];
    let res = 1;
    let i = x + directions[dir][0];
    let j = y + directions[dir][1];

    if (
      i >= 0 &&
      i < m &&
      j >= 0 &&
      j < n &&
      ((curr <= 1 && grid[i][j] === 2) || (curr === 2 && grid[i][j] === 0))
    ) {
      res = Math.max(res, 1 + dfs(i, j, dir, t));
    }

    // one turn allowed
    if (t === 1) {
      const nextDir = (dir + 1) % 4;
      i = x + directions[nextDir][0];
      j = y + directions[nextDir][1];
      if (
        i >= 0 &&
        i < m &&
        j >= 0 &&
        j < n &&
        ((curr <= 1 && grid[i][j] === 2) || (curr === 2 && grid[i][j] === 0))
      ) {
        res = Math.max(res, 1 + dfs(i, j, nextDir, t - 1));
      }
    }

    return (memo[x][y][key] = res);
  }

  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        for (let d = 0; d < 4; d++) {
          res = Math.max(res, dfs(i, j, d, 1));
        }
      }
    }
  }

  return res;
}

export { lenOfVDiagonal };
