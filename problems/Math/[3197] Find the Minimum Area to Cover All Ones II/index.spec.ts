import { describe, expect, it } from 'vitest';
import { minimumSum } from '.';

describe('minimumSum', () => {
  it('example 1', () => {
    const grid = [
      [1, 0, 1],
      [1, 1, 1],
    ];

    const result = minimumSum(grid);

    expect(result).toBe(5);
  });

  it('example 2', () => {
    const grid = [
      [1, 0, 1, 0],
      [0, 1, 0, 1],
    ];

    const result = minimumSum(grid);

    expect(result).toBe(5);
  });
});
