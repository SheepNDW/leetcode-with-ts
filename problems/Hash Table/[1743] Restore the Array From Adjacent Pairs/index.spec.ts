import { describe, expect, it } from 'vitest';
import { restoreArray } from '.';

describe.skip('restoreArray', () => {
  it('should return [1,2,3,4] for [[2,1],[3,4],[3,2]]', () => {
    const input = [
      [2, 1],
      [3, 4],
      [3, 2],
    ];
    const expected = [1, 2, 3, 4];
    const result = restoreArray(input);
    expect(result).toEqual(expected);
  });

  it('should return [-2,4,1,-3] or [-3,1,4,-2] for [[4,-2],[1,4],[-3,1]]', () => {
    const input = [
      [4, -2],
      [1, 4],
      [-3, 1],
    ];
    const expected1 = [-2, 4, 1, -3];
    const expected2 = [-3, 1, 4, -2];
    const result = restoreArray(input);
    expect([expected1, expected2]).toContainEqual(result);
  });

  it('should return [100000,-100000] for [[100000,-100000]]', () => {
    const input = [[100000, -100000]];
    const expected = [100000, -100000];
    const result = restoreArray(input);
    expect(result).toEqual(expected);
  });
});
