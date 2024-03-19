import { describe, expect, it } from 'vitest';
import { findMinArrowShots } from '.';

describe.skip('findMinArrowShots', () => {
  it('should return 2 for balloons represented by [[10,16],[2,8],[1,6],[7,12]]', () => {
    const points = [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ];

    const result = findMinArrowShots(points);

    expect(result).toBe(2);
  });

  it('should return 4 for balloons represented by [[1,2],[3,4],[5,6],[7,8]]', () => {
    const points = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];

    const result = findMinArrowShots(points);

    expect(result).toBe(4);
  });

  it('should return 2 for balloons represented by [[1,2],[2,3],[3,4],[4,5]]', () => {
    const points = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ];

    const result = findMinArrowShots(points);

    expect(result).toBe(2);
  });
});
