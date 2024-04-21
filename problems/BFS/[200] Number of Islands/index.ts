function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let islands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        bfs(i, j);
        islands++;
      }
    }
  }

  return islands;

  function bfs(row: number, col: number) {
    const queue = [[row, col]];
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    while (queue.length) {
      const [r, c] = queue.shift()!;
      visited[r][c] = true;

      for (const [dr, dc] of directions) {
        const newRow = r + dr;
        const newCol = c + dc;

        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          if (grid[newRow][newCol] === '1' && !visited[newRow][newCol]) {
            queue.push([newRow, newCol]);
            visited[newRow][newCol] = true;
          }
        }
      }
    }
  }
}

export { numIslands };
