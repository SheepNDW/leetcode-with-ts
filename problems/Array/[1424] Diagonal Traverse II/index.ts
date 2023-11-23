// brute force (TLE)
function findDiagonalOrder0(nums: number[][]): number[] {
  const m = nums.length;
  const n = nums.reduce((prev, currRow) => Math.max(prev, currRow.length), 0);

  const result: number[] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0, currRow = i; j <= i && currRow >= 0; j++, currRow--) {
      const currNum = nums[currRow][j];
      if (currNum !== undefined) {
        result.push(currNum);
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = i, currRow = m - 1; j < n && currRow >= 0; j++, currRow--) {
      const currNum = nums[currRow] ? nums[currRow][j] : undefined;
      if (currNum !== undefined) {
        result.push(currNum);
      }
    }
  }

  return result;
}

// hash table
function findDiagonalOrder1(nums: number[][]): number[] {
  const diagonalMap = new Map<number, number[]>();

  for (let row = 0; row < nums.length; row++) {
    for (let col = 0; col < nums[row].length; col++) {
      const diagonal = col + row;
      if (!diagonalMap.has(diagonal)) {
        diagonalMap.set(diagonal, []);
      }
      diagonalMap.get(diagonal)!.push(nums[row][col]);
    }
  }

  const result: number[] = [];
  for (const diagonal of diagonalMap.values()) {
    // 因為在儲存時順序是上到下 所以要做 reverse
    result.push(...diagonal.reverse());
  }

  return result;
}

// BFS
function findDiagonalOrder(nums: number[][]): number[] {
  const queue = [[0, 0]];
  const result: number[] = [];

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;
    result.push(nums[row][col]);

    if (col === 0 && row + 1 < nums.length) {
      queue.push([row + 1, col]);
    }

    if (col + 1 < nums[row].length) {
      queue.push([row, col + 1]);
    }
  }

  return result;
}

export { findDiagonalOrder };
