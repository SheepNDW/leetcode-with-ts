import { describe, expect, it } from 'vitest';
import { minCost } from '.';

describe('minCost', () => {
  it('example 1', () => {
    const n = 4;
    const edges = [
      [0, 1, 3],
      [3, 1, 1],
      [2, 3, 4],
      [0, 2, 2],
    ];
    const result = minCost(n, edges);
    expect(result).toEqual(5);
  });

  it('example 2', () => {
    const n = 4;
    const edges = [
      [0, 2, 1],
      [2, 1, 1],
      [1, 3, 1],
      [2, 3, 3],
    ];
    const result = minCost(n, edges);
    expect(result).toEqual(3);
  });
});
