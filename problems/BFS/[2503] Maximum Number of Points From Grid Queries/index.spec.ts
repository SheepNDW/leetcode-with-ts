import { describe, expect, it } from 'vitest';
import { maxPoints } from '.';

describe.skip('maxPoints', () => {
  it('example 1', () => {
    const grid = [
      [1, 2, 3],
      [2, 5, 7],
      [3, 5, 1],
    ];
    const queries = [5, 6, 2];

    const result = maxPoints(grid, queries);

    expect(result).toEqual([5, 8, 1]);
  });

  it('example 2', () => {
    const grid = [
      [5, 2, 1],
      [1, 1, 2],
    ];
    const queries = [3];

    const result = maxPoints(grid, queries);

    expect(result).toEqual([0]);
  });
});
