import { describe, expect, it } from 'vitest';
import { findDifference } from '.';

describe.skip('findDifference', () => {
  it('should return correct difference when first array has extra elements', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [1, 3, 5];

    const result = findDifference(array1, array2);

    expect(result).toEqual([[2, 4], []]);
  });

  it('should return correct difference when both arrays have unique elements', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [1, 3, 5, 7, 9];

    const result = findDifference(array1, array2);

    expect(result).toEqual([
      [2, 4],
      [7, 9],
    ]);
  });

  it('should return empty arrays when both arrays are identical', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [1, 2, 3, 4, 5];

    const result = findDifference(array1, array2);

    expect(result).toEqual([[], []]);
  });

  it('should handle duplicate elements correctly', () => {
    const array1 = [1, 2, 3, 3];
    const array2 = [1, 1, 2, 2];

    const result = findDifference(array1, array2);

    expect(result).toEqual([[3], []]);
  });
});
