import { describe, expect, it } from 'vitest';
import { findFarmland } from '.';

describe.skip('findFarmland', () => {
  it('should return [[0,0,0,0], [1,1,2,2]] for land = [[1,0,0],[0,1,1],[0,1,1]]', () => {
    const land = [
      [1, 0, 0],
      [0, 1, 1],
      [0, 1, 1],
    ];
    const result = findFarmland(land);
    const expected = [
      [0, 0, 0, 0],
      [1, 1, 2, 2],
    ];

    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toEqual(expected[i]);
    }
  });

  it('should return [[0,0,1,1]] for land = [[1,1],[1,1]]', () => {
    const land = [
      [1, 1],
      [1, 1],
    ];
    const result = findFarmland(land);
    const expected = [[0, 0, 1, 1]];

    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toEqual(expected[i]);
    }
  });

  it('should return [] for land = [[0]]', () => {
    const land = [[0]];
    const result = findFarmland(land);
    expect(result).toEqual([]);
  });
});
