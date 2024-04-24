import { describe, expect, it } from 'vitest';
import { findMinHeightTrees } from '.';

describe.skip('findMinHeightTrees', () => {
  it('should return [1] for n = 4, edges = [[1, 0], [1, 2], [1, 3]]', () => {
    const n = 4;
    const edges = [
      [1, 0],
      [1, 2],
      [1, 3],
    ];

    const result = findMinHeightTrees(n, edges);

    expect(result).toEqual([1]);
  });

  it('should return [3, 4] for n = 6, edges = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]', () => {
    const n = 6;
    const edges = [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 4],
      [5, 4],
    ];

    const result = findMinHeightTrees(n, edges);

    expect(result).toEqual([3, 4]);
  });

  it('should return [0,1] for n = 2, edges = [[0,1]]', () => {
    const n = 2;
    const edges = [[0, 1]];

    const result = findMinHeightTrees(n, edges);

    expect(result).toEqual([0, 1]);
  });
});
