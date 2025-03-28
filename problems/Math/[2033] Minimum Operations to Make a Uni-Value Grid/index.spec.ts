import { describe, expect, it } from 'vitest';
import { minOperations } from '.';

describe.skip('minOperations', () => {
  it('example 1', () => {
    const grid = [
      [2, 4],
      [6, 8],
    ];
    const x = 2;

    const result = minOperations(grid, x);

    expect(result).toBe(4);
  });

  it('example 2', () => {
    const grid = [
      [1, 5],
      [2, 3],
    ];
    const x = 1;

    const result = minOperations(grid, x);

    expect(result).toBe(5);
  });

  it('example 3', () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const x = 2;

    const result = minOperations(grid, x);

    expect(result).toBe(-1);
  });
});
