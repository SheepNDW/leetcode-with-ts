import { describe, expect, it } from 'vitest';
import { matrixScore } from '.';

describe.skip('matrixScore', () => {
  it('should return 1 for a 1x1 grid with a zero', () => {
    const grid = [[0]];
    const expected = 1;
    const result = matrixScore(grid);
    expect(result).toBe(expected);
  });

  it('should return 1 for a 1x1 grid with a one', () => {
    const grid = [[1]];
    const expected = 1;
    const result = matrixScore(grid);
    expect(result).toBe(expected);
  });

  it('should return 39 for the grid [[0,0,1,1],[1,0,1,0],[1,1,0,0]]', () => {
    const grid = [
      [0, 0, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 0, 0],
    ];
    const expected = 39;
    const result = matrixScore(grid);
    expect(result).toBe(expected);
  });

  it('should maximize the score for a 2x2 grid', () => {
    const grid = [
      [0, 1],
      [1, 0],
    ];
    const expected = 6; // 0b11 + 0b11 = 3 + 3 = 6
    const result = matrixScore(grid);
    expect(result).toBe(expected);
  });
});
