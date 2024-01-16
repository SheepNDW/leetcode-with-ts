import { describe, expect, it } from 'vitest';
import { findWinners } from '.';

describe.skip('findWinners', () => {
  it('should return players with zero or one loss correctly for Example 1', () => {
    const matches = [
      [1, 3],
      [2, 3],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 5],
      [4, 8],
      [4, 9],
      [10, 4],
      [10, 9],
    ];
    const expected = [
      [1, 2, 10],
      [4, 5, 7, 8],
    ];

    const result = findWinners(matches);

    expect(result).toEqual(expected);
  });

  it('should return players with zero or one loss correctly for Example 2', () => {
    const matches = [
      [2, 3],
      [1, 3],
      [5, 4],
      [6, 4],
    ];
    const expected = [[1, 2, 5, 6], []];

    const result = findWinners(matches);

    expect(result).toEqual(expected);
  });

  it('should handle single match', () => {
    const matches = [[1, 2]];
    const expected = [[1], [2]];

    const result = findWinners(matches);

    expect(result).toEqual(expected);
  });
});
