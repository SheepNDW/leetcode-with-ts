import { describe, expect, it } from 'vitest';
import { productExceptSelf } from '.';

function normalizeZeros(array: number[]): number[] {
  return array.map((item) => (Object.is(item, -0) ? 0 : item));
}

describe.skip('productExceptSelf', () => {
  it('should return [24,12,8,6] for nums = [1,2,3,4]', () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    const result = productExceptSelf(nums);
    expect(normalizeZeros(result)).toEqual(expected);
  });

  it('should return [0,0,9,0,0] for nums = [-1,1,0,-3,3]', () => {
    const nums = [-1, 1, 0, -3, 3];
    const expected = [0, 0, 9, 0, 0];
    const result = productExceptSelf(nums);
    expect(normalizeZeros(result)).toEqual(expected);
  });
});
