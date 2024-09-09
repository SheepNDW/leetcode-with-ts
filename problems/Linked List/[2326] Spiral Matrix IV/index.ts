import { ListNode } from '../../utils/list';

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const matrix: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));
  const dir = [
    [0, 1], // 右
    [1, 0], // 下
    [0, -1], // 左
    [-1, 0], // 上
  ];

  let d = 0;
  let row = 0;
  let col = 0;

  let cur = head;
  while (cur) {
    matrix[row][col] = cur.val;

    let nextRow = row + dir[d][0];
    let nextCol = col + dir[d][1];

    if (
      nextRow < 0 ||
      nextRow >= m ||
      nextCol < 0 ||
      nextCol >= n ||
      matrix[nextRow][nextCol] !== -1
    ) {
      d = (d + 1) % 4;
      nextRow = row + dir[d][0];
      nextCol = col + dir[d][1];
    }

    row = nextRow;
    col = nextCol;
    cur = cur.next;
  }

  return matrix;
}

export { spiralMatrix };
