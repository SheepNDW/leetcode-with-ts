import { describe, expect, it } from 'vitest';
import { minPairSum } from '.';

describe.skip('minPairSum', () => {
  it('should return 7 for nums = [3,5,2,3]', () => {
    const nums = [3, 5, 2, 3];
    const result = minPairSum(nums);
    expect(result).toBe(7);
  });

  it('should return 8 for nums = [3,5,4,2,4,6]', () => {
    const nums = [3, 5, 4, 2, 4, 6];
    const result = minPairSum(nums);
    expect(result).toBe(8);
  });
});
