function updateMatrix0(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const MAX_DISTANCE = m * n;
  const directions = [
    [1, 0], // 下
    [-1, 0], // 上
    [0, 1], // 右
    [0, -1], // 左
  ];
  const queue: [number, number][] = [];
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

  // 初始化
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        visited[i][j] = true;
      } else {
        mat[i][j] = MAX_DISTANCE;
      }
    }
  }

  // BFS
  while (queue.length > 0) {
    const [i, j] = queue.shift()!;
    for (const [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj]) {
        visited[ni][nj] = true;
        mat[ni][nj] = mat[i][j] + 1;
        queue.push([ni, nj]);
      }
    }
  }

  return mat;
}

/**
 * 思路：BFS
 *
 * 準備一個 queue 來存放座標，並用 visited 來記錄是否已經走過。
 *
 * 1. 初始化：
 *    - 如果是 0 就維持為 0，然後將該座標加入 queue，並將 visited 設為 true，之後不用再去更新它。
 *    - 如果是 1 就設為 m + n，代表最大距離（讓它在 BFS 時可以被更新）
 *    我們用 [[0, 0, 0],[0, 1, 0],[1, 1, 1],] 來舉例，經過初始化後會變成：
 *      [0, 0, 0]
 *      [0, 6, 0]
 *      [6, 6, 6]
 * 2. 開始從 queue 中取出座標，並檢查該座標的上下左右是否有可以更新的座標
 *    - 取出 [0,0]，左和上超出邊界，右和下兩個 visited 皆為 true，不用更新。
 *    - 取出 [0,1]，檢查下面的 [1,1] 為 6，所以將 [1,1] 更新為 0 + 1 = 1，並將 [1,1] 加入 queue。此時矩陣變成：
 *       [0, 0, 0]
 *       [0, 1, 0]
 *       [6, 6, 6]
 *    - 取出 [0,2]，相鄰的座標都已經更新過了，不用更新。
 *    - 取出 [1,0]，下面尚未走訪過且值為 6，將 [2,0] 更新為 1，並將 [2,0] 加入 queue。此時矩陣變成：
 *       [0, 0, 0]
 *       [0, 1, 0]
 *       [1, 6, 6]
 *    - 取出 [1,2]，下面為 6，將 [2,2] 更新為 1，並將 [2,2] 加入 queue。此時矩陣變成：
 *       [0, 0, 0]
 *       [0, 1, 0]
 *       [1, 6, 1]
 *    - 取出 [1,1]，剩下下面還沒走訪過，將 [2,1] 更新為 2，並將 [2,1] 加入 queue。此時矩陣變成：
 *       [0, 0, 0]
 *       [0, 1, 0]
 *       [1, 2, 1]
 *    - 取出 [2,0]，周圍都已經走訪過，不用更新。
 *    - 取出 [2,2]，周圍都已經走訪過，不用更新。
 *    - 取出 [2,1]，周圍都已經走訪過，不用更新。
 * 3. queue 被清空，結束迴圈，回傳矩陣。
 */

// ==== Alternatives ====

// DP
function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  // 第一個遍歷：左上到右下
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        mat[i][j] = m + n; // 設置一個足夠大的初始值
        if (i > 0) mat[i][j] = Math.min(mat[i][j], mat[i - 1][j] + 1);
        if (j > 0) mat[i][j] = Math.min(mat[i][j], mat[i][j - 1] + 1);
      }
    }
  }

  // 第二個遍歷：右下到左上
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i < m - 1) mat[i][j] = Math.min(mat[i][j], mat[i + 1][j] + 1);
      if (j < n - 1) mat[i][j] = Math.min(mat[i][j], mat[i][j + 1] + 1);
    }
  }

  return mat;
}

export { updateMatrix };
