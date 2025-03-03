import { describe, expect, it } from 'vitest';
import { pivotArray } from '.';

describe.skip('pivotArray', () => {
  it('example 1', () => {
    const nums = [9, 12, 5, 10, 14, 3, 10];
    const pivot = 10;

    const result = pivotArray(nums, pivot);

    expect(result).toEqual([9, 5, 3, 10, 10, 12, 14]);
  });

  it('example 2', () => {
    const nums = [-3, 4, 3, 2];
    const pivot = 2;

    const result = pivotArray(nums, pivot);

    expect(result).toEqual([-3, 2, 4, 3]);
  });
});
