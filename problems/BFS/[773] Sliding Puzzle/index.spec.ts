import { describe, expect, it } from 'vitest';
import { slidingPuzzle } from '.';

describe.skip('slidingPuzzle', () => {
  it('should return 1 for [[1,2,3],[4,0,5]]', () => {
    const board = [
      [1, 2, 3],
      [4, 0, 5],
    ];
    const result = slidingPuzzle(board);
    expect(result).toBe(1);
  });

  it('should return -1 for [[1,2,3],[5,4,0]]', () => {
    const board = [
      [1, 2, 3],
      [5, 4, 0],
    ];
    const result = slidingPuzzle(board);
    expect(result).toBe(-1);
  });

  it('should return 5 for [[4,1,2],[5,0,3]]', () => {
    const board = [
      [4, 1, 2],
      [5, 0, 3],
    ];
    const result = slidingPuzzle(board);
    expect(result).toBe(5);
  });
});
