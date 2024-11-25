import { describe, expect, it } from 'vitest';
import { maxEqualRowsAfterFlips } from '.';

describe('maxEqualRowsAfterFlips', () => {
  it('should return 1 for [[0,1],[1,1]]', () => {
    const matrix = [
      [0, 1],
      [1, 1],
    ];
    const result = maxEqualRowsAfterFlips(matrix);
    expect(result).toBe(1);
  });

  it('should return 2 for [[0,1],[1,0]]', () => {
    const matrix = [
      [0, 1],
      [1, 0],
    ];
    const result = maxEqualRowsAfterFlips(matrix);
    expect(result).toBe(2);
  });

  it('should return 2 for [[0,0,0],[0,0,1],[1,1,0]]', () => {
    const matrix = [
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ];
    const result = maxEqualRowsAfterFlips(matrix);
    expect(result).toBe(2);
  });
});
