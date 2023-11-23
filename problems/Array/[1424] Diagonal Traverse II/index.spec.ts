import { describe, expect, it } from 'vitest';
import { findDiagonalOrder } from './';

describe.skip('findDiagonalOrder', () => {
  it('should return [1,4,2,7,5,3,8,6,9] when nums = [[1,2,3],[4,5,6],[7,8,9]]', () => {
    const nums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [1, 4, 2, 7, 5, 3, 8, 6, 9];

    const result = findDiagonalOrder(nums);

    expect(result).toEqual(expected);
  });

  it('should return [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16] when nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]', () => {
    // prettier-ignore
    const nums = [
      [1, 2, 3, 4, 5], 
      [6, 7], 
      [8], 
      [9, 10, 11], 
      [12, 13, 14, 15, 16]
    ];
    const expected = [1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16];

    const result = findDiagonalOrder(nums);

    expect(result).toEqual(expected);
  });

  it('should return [[1,2,3,4,5,6]] when nums = [[1,2,3,4,5,6]]', () => {
    const nums = [[1, 2, 3, 4, 5, 6]];
    const expected = [1, 2, 3, 4, 5, 6];

    const result = findDiagonalOrder(nums);

    expect(result).toEqual(expected);
  });

  it('should return [1, 4, 2, 5, 3, 6] when nums = [[1,2,3],[4,5,6]]', () => {
    const nums = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const expected = [1, 4, 2, 5, 3, 6];
    const result = findDiagonalOrder(nums);

    expect(result).toEqual(expected);
  });

  it.skip('TLE test', () => {
    const nums = Array.from({ length: 1e5 }, (_, idx) => [idx + 1]);
    const expected = nums.flat();

    const result = findDiagonalOrder(nums);

    expect(result).toEqual(expected);
  });
});
