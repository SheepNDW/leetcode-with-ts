function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    const rowIndex = ~~(mid / n);
    const colIndex = mid % n;

    if (matrix[rowIndex][colIndex] === target) {
      return true;
    } else if (matrix[rowIndex][colIndex] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

/**
 * 思路：binary search
 * #1 初始化兩個指標 left, right。在這裡 left 指向二維陣列「展平」後的第一個元素，right 指向二維陣列「展評」後的最後一個元素。
 * #2 進行二分搜尋，當 left 不大於 right 時，取得中間元素的索引 mid，然後找到該索引在二維陣列中的位置，並與目標值進行比較。
 * #3 根據比較結果更新搜尋範圍，如果中間元素等於目標值，則回傳 true，否則如果中間元素大於目標值，則將 right 減少，否則將 left 增加。
 * #4 如果沒有找到目標值，則回傳 false。
 *
 * Note：不需要真的將陣列展平，只需要「想像」它已經被 flatten 了，並使用索引計算出元素在原始二維陣列中的位置即可。
 * 例如現在有一個二維陣列如下：
 * ```
 * [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9],
 *   [10, 11, 12]
 * ]
 * ```
 * 我們把它展平後看起來會像這樣：
 * ```
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12]
 * ```
 * 但我們不用真的將它展平。相反的，如果我們想要取得展平後的第 7 個元素，我們可以這樣做：
 * ```
 * row = 7 / 3 = 2 (整數除法)
 * col = 7 % 3 = 1
 * ```
 * 所以 7 在原始二維陣列中的位置為 matrix[2][1]。
 */

export { searchMatrix };
