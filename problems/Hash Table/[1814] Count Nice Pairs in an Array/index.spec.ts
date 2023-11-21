import { describe, expect, it } from 'vitest';
import { countNicePairs } from '.';

describe.skip('countNicePairs', () => {
  it('should return 2 for nums = [42,11,1,97]', () => {
    const nums = [42, 11, 1, 97];

    const result = countNicePairs(nums);

    expect(result).toBe(2);
  });

  it('should return 4 for nums = [13,10,35,24,76]', () => {
    const nums = [13, 10, 35, 24, 76];

    const result = countNicePairs(nums);

    expect(result).toBe(4);
  });
});
