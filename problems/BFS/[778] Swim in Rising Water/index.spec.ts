import { describe, expect, it } from 'vitest';
import { swimInWater } from '.';

describe('swimInWater', () => {
  it('example 1', () => {
    const grid = [
      [0, 2],
      [1, 3],
    ];
    const result = swimInWater(grid);
    expect(result).toBe(3);
  });

  it('example 2', () => {
    const grid = [
      [0, 1, 2, 3, 4],
      [24, 23, 22, 21, 5],
      [12, 13, 14, 15, 16],
      [11, 17, 18, 19, 20],
      [10, 9, 8, 7, 6],
    ];
    const result = swimInWater(grid);
    expect(result).toBe(16);
  });
});
