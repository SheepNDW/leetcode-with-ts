function findFarmland(land: number[][]): number[][] {
  const m = land.length;
  const n = land[0].length;
  const result: number[][] = [];

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        const farmland = [i, j, i, j];
        search(i, j, farmland);
        result.push(farmland);
      }
    }
  }

  return result;

  function search(row: number, col: number, farmland: number[]) {
    const queue: number[][] = [[row, col]];
    const directions = [
      [0, 1],
      [1, 0],
    ];

    while (queue.length) {
      const [r, c] = queue.shift()!;
      visited[r][c] = true;

      for (const [dr, dc] of directions) {
        const newRow = r + dr;
        const newCol = c + dc;

        if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
          if (land[newRow][newCol] === 1 && !visited[newRow][newCol]) {
            visited[newRow][newCol] = true;
            queue.push([newRow, newCol]);
            // Update bottom-right corner of the farmland
            farmland[2] = Math.max(farmland[2], newRow);
            farmland[3] = Math.max(farmland[3], newCol);
          }
        }
      }
    }
  }
}

export { findFarmland };
