import { describe, expect, it } from 'vitest';
import { minCapability } from '.';

describe.skip('minCapability', () => {
  it('should return 5 for nums = [2,3,5,9], k = 2', () => {
    const nums = [2, 3, 5, 9];
    const k = 2;

    const result = minCapability(nums, k);

    expect(result).toBe(5);
  });

  it('should return 2 for nums = [2,7,9,3,1], k = 2', () => {
    const nums = [2, 7, 9, 3, 1];
    const k = 2;

    const result = minCapability(nums, k);

    expect(result).toBe(2);
  });
});
