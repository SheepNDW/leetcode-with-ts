import { describe, expect, it } from 'vitest';
import { maximumSafenessFactor } from '.';

describe.skip('maximumSafenessFactor', () => {
  it('should return 0 for grid = [[1,0,0],[0,0,0],[0,0,1]]', () => {
    const grid = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ];
    expect(maximumSafenessFactor(grid)).toBe(0);
  });

  it('should return 2 for grid = [[0,0,1],[0,0,0],[0,0,0]]', () => {
    const grid = [
      [0, 0, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(maximumSafenessFactor(grid)).toBe(2);
  });

  it('should return 2 for grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]', () => {
    const grid = [
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
    ];
    expect(maximumSafenessFactor(grid)).toBe(2);
  });

  it('should return 0 for grid = [[1,1,1],[0,1,1],[0,0,0]]', () => {
    const grid = [
      [1, 1, 1],
      [0, 1, 1],
      [0, 0, 0],
    ];
    const fill = [
      [1, 1, 1],
      [2, 1, 1],
      [3, 2, 2],
    ];
    expect(maximumSafenessFactor(grid)).toBe(0);
  });
});
