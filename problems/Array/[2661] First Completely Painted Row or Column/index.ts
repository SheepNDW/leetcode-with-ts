function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  // 建立數字到座標的對照表
  const position = new Map<number, [number, number]>();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      position.set(mat[i][j], [i, j]);
    }
  }

  // 初始化塗色進度
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  // 遍歷 arr，依序塗色
  for (let i = 0; i < arr.length; i++) {
    const [row, col] = position.get(arr[i])!;
    rows[row]++;
    cols[col]++;

    // 檢查是否有列或行被完全塗滿
    if (rows[row] === n || cols[col] === m) {
      return i;
    }
  }

  return -1; // 題目保證一定有解
}

export { firstCompleteIndex };
