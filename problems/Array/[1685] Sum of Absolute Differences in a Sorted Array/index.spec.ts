import { describe, expect, it } from 'vitest';
import { getSumAbsoluteDifferences } from '.';

describe.skip('getSumAbsoluteDifferences', () => {
  it('should return correct sum of absolute differences for [2,3,5]', () => {
    const nums = [2, 3, 5];
    const expected = [4, 3, 5];

    const result = getSumAbsoluteDifferences(nums);

    expect(result).toEqual(expected);
  });

  it('should return correct sum of absolute differences for [1,4,6,8,10]', () => {
    const nums = [1, 4, 6, 8, 10];
    const expected = [24, 15, 13, 15, 21];

    const result = getSumAbsoluteDifferences(nums);

    expect(result).toEqual(expected);
  });

  it('should return correct sum of absolute differences for a two-element array', () => {
    const nums = [1, 2];
    const expected = [1, 1]; // 因為 |1-2| = |2-1| = 1

    const result = getSumAbsoluteDifferences(nums);

    expect(result).toEqual(expected);
  });

  it('should return zeros for an array with all identical elements', () => {
    const nums = [5, 5, 5];
    const expected = [0, 0, 0]; // 所有元素相同，差值總和為 0

    const result = getSumAbsoluteDifferences(nums);

    expect(result).toEqual(expected);
  });
});
