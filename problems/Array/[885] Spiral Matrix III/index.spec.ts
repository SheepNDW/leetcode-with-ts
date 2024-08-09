import { describe, expect, it } from 'vitest';
import { spiralMatrixIII } from '.';

describe.skip('spiralMatrixIII', () => {
  it('should return [[0,0],[0,1],[0,2],[0,3]]', () => {
    const rows = 1;
    const cols = 4;
    const rStart = 0;
    const cStart = 0;

    const result = spiralMatrixIII(rows, cols, rStart, cStart);

    expect(result).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ]);
  });

  it('should return [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]', () => {
    const rows = 5;
    const cols = 6;
    const rStart = 1;
    const cStart = 4;

    const result = spiralMatrixIII(rows, cols, rStart, cStart);

    expect(result).toEqual([
      [1, 4],
      [1, 5],
      [2, 5],
      [2, 4],
      [2, 3],
      [1, 3],
      [0, 3],
      [0, 4],
      [0, 5],
      [3, 5],
      [3, 4],
      [3, 3],
      [3, 2],
      [2, 2],
      [1, 2],
      [0, 2],
      [4, 5],
      [4, 4],
      [4, 3],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 1],
      [1, 1],
      [0, 1],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
    ]);
  });
});
