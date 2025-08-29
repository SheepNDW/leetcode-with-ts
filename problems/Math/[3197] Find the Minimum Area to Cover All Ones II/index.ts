/*
  1.        2.      3.
              
  ┌－┐      ┌┐┌┐    ┌－┐
  └－┘      └┘└┘    └－┘
  ┌－┐      ┌－┐    ┌┐┌┐
  └－┘      └－┘    └┘└┘
  ┌－┐
  └－┘
  
  4.       5.      6.
  ┌┐┌┐┌┐   ┌ ┐┌┐    ┌┐┌ ┐
  └┘└┘└┘   │ │└┘    └┘│ │
           │ │┌┐    ┌┐│ │
           └ ┘└┘    └┘└ ┘
*/
function minimumSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let res = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      const area1 = process(grid, 0, 0, i - 1, n - 1);
      const area2 = process(grid, i, 0, j - 1, n - 1);
      const area3 = process(grid, j, 0, m - 1, n - 1);
      res = Math.min(res, area1 + area2 + area3);
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const area1 = process(grid, 0, 0, i - 1, j - 1);
      const area2 = process(grid, 0, j, i - 1, n - 1);
      const area3 = process(grid, i, 0, m - 1, n - 1);
      res = Math.min(res, area1 + area2 + area3);
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const area1 = process(grid, 0, 0, i - 1, n - 1);
      const area2 = process(grid, i, 0, m - 1, j - 1);
      const area3 = process(grid, i, j, m - 1, n - 1);
      res = Math.min(res, area1 + area2 + area3);
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const area1 = process(grid, 0, 0, m - 1, i - 1);
      const area2 = process(grid, 0, i, m - 1, j - 1);
      const area3 = process(grid, 0, j, m - 1, n - 1);
      res = Math.min(res, area1 + area2 + area3);
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const area1 = process(grid, 0, 0, m - 1, j - 1);
      const area2 = process(grid, 0, j, i - 1, n - 1);
      const area3 = process(grid, i, j, m - 1, n - 1);
      res = Math.min(res, area1 + area2 + area3);
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const area1 = process(grid, 0, 0, i - 1, j - 1);
      const area2 = process(grid, i, 0, m - 1, j - 1);
      const area3 = process(grid, 0, j, m - 1, n - 1);
      res = Math.min(res, area1 + area2 + area3);
    }
  }

  return res;
}

function process(grid: number[][], a: number, b: number, c: number, d: number): number {
  if (a > c || b > d) return Number.MAX_SAFE_INTEGER / 3;
  let left = Number.MAX_SAFE_INTEGER;
  let top = Number.MAX_SAFE_INTEGER;
  let bottom = Number.MIN_SAFE_INTEGER;
  let right = Number.MIN_SAFE_INTEGER;

  for (let i = a; i <= c; i++) {
    for (let j = b; j <= d; j++) {
      if (grid[i][j] === 0) continue;

      left = Math.min(left, j);
      right = Math.max(right, j);
      top = Math.min(top, i);
      bottom = Math.max(bottom, i);
    }
  }

  if (bottom >= top && right >= left) {
    return (bottom - top + 1) * (right - left + 1);
  }
  return Number.MAX_SAFE_INTEGER / 3;
}

export { minimumSum };
