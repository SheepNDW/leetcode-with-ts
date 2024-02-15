import { describe, expect, it } from 'vitest';
import { rearrangeArray } from '.';

describe.skip('rearrangeArray', () => {
  it('should return [3,-2,1,-5,2,-4] for input [3,1,-2,-5,2,-4]', () => {
    const nums = [3, 1, -2, -5, 2, -4];

    const result = rearrangeArray(nums);

    expect(result).toEqual([3, -2, 1, -5, 2, -4]);
  });

  it('should return [1,-1] for input [-1,1]', () => {
    const nums = [-1, 1];

    const result = rearrangeArray(nums);

    expect(result).toEqual([1, -1]);
  });
});
