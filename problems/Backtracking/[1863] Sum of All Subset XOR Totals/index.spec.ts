import { describe, expect, it } from 'vitest';
import { subsetXORSum } from '.';

describe.skip('subsetXORSum', () => {
  it('should return 6 for nums=[1,3]', () => {
    const nums = [1, 3];
    const result = subsetXORSum(nums);
    expect(result).toBe(6);
  });

  it('should return 28 for nums=[5,1,6]', () => {
    const nums = [5, 1, 6];
    const result = subsetXORSum(nums);
    expect(result).toBe(28);
  });

  it('should return 480 for nums=[3,4,5,6,7,8]', () => {
    const nums = [3, 4, 5, 6, 7, 8];
    const result = subsetXORSum(nums);
    expect(result).toBe(480);
  });
});
