import { describe, expect, it } from 'vitest';
import { findDifference } from '.';

describe('findDifference', () => {
  it('should return the difference of two arrays', () => {
    expect(findDifference([1, 2, 3, 4, 5], [1, 3, 5])).toEqual([[2, 4], []]);
    expect(findDifference([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])).toEqual([
      [2, 4],
      [7, 9],
    ]);
    expect(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual([[], []]);
    expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
  });
});
