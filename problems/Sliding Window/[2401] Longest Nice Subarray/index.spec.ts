import { describe, expect, it } from 'vitest';
import { longestNiceSubarray } from '.';

describe.skip('longestNiceSubarray', () => {
  it('should return 3 for nums = [1,3,8,48,10]', () => {
    const nums = [1, 3, 8, 48, 10];

    const result = longestNiceSubarray(nums);

    expect(result).toBe(3);
  });

  it('should return 1 for nums = [3,1,5,11,13]', () => {
    const nums = [3, 1, 5, 11, 13];

    const result = longestNiceSubarray(nums);

    expect(result).toBe(1);
  });
});
