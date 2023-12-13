import { describe, expect, it } from 'vitest';
import { maxSubarrayLength } from '.';

describe.skip('maxSubarrayLength', () => {
  it('should return 6 for the input [1,2,3,1,2,3,1,2] with k = 2', () => {
    const nums = [1, 2, 3, 1, 2, 3, 1, 2];
    const k = 2;
    const expected = 6;

    const result = maxSubarrayLength(nums, k);

    expect(result).toBe(expected);
  });

  it('should return 2 for the input [1,2,1,2,1,2,1,2] with k = 1', () => {
    const nums = [1, 2, 1, 2, 1, 2, 1, 2];
    const k = 1;
    const expected = 2;

    const result = maxSubarrayLength(nums, k);

    expect(result).toBe(expected);
  });

  it('should return 4 for the input [5,5,5,5,5,5,5] with k = 4', () => {
    const nums = [5, 5, 5, 5, 5, 5, 5];
    const k = 4;
    const expected = 4;

    const result = maxSubarrayLength(nums, k);

    expect(result).toBe(expected);
  });
});
