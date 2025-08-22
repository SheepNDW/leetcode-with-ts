/*
  brute force
*/
function numSubmat0(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  const height = Array(n).fill(0);
  let res = 0;

  for (let i = 0; i < m; i++) {
    // 更新直方圖高度
    for (let j = 0; j < n; j++) {
      height[j] = mat[i][j] === 1 ? height[j] + 1 : 0;
    }

    // 以 i 列為底，對每個 j 往左擴，累加能形成全部是 1 的矩陣
    for (let j = 0; j < n; j++) {
      let minHeight = Number.MAX_SAFE_INTEGER;

      for (let k = j; k >= 0; k--) {
        // 高度為 0 即不可能再往左
        if (height[k] === 0) break;
        // 目前區間 [k..j] 的最小高度
        minHeight = Math.min(minHeight, height[k]);
        res += minHeight;
      }
    }
  }

  return res;
}

/*
  stack
*/
function numSubmat(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  let res = 0;

  // 加一個虛擬的 bar 在最前面
  const height = Array(n + 1).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 1 - n
      height[j + 1] = mat[i][j] === 1 ? height[j + 1] + 1 : 0;
    }

    const stack = [0];
    let count = 0;

    for (let j = 1; j <= n; j++) {
      while (stack.length > 0 && height[stack[stack.length - 1]] > height[j]) {
        const p1 = stack.pop()!;
        const p2 = stack[stack.length - 1];
        count = count - (height[p1] - height[j]) * (p1 - p2);
      }
      count += height[j];
      res += count;
      stack.push(j);
    }
  }

  return res;
}

export { numSubmat };
