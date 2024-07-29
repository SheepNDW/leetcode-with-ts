import { describe, expect, it } from 'vitest';
import { findTheCity } from '.';

describe.skip('findTheCity', () => {
  it('should return 3 for n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4', () => {
    const n = 4;
    const edges = [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ];
    const distanceThreshold = 4;

    const result = findTheCity(n, edges, distanceThreshold);

    expect(result).toBe(3);
  });

  it('should return 0 for n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2', () => {
    const n = 5;
    const edges = [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 3],
      [1, 4, 2],
      [2, 3, 1],
      [3, 4, 1],
    ];
    const distanceThreshold = 2;

    const result = findTheCity(n, edges, distanceThreshold);

    expect(result).toBe(0);
  });
});
