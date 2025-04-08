import { describe, expect, it } from 'vitest';
import { canPartition } from '.';

describe.skip('canPartition', () => {
  it('should return true for nums = [1, 5, 11, 5]', () => {
    const nums = [1, 5, 11, 5];
    const result = canPartition(nums);
    expect(result).toBe(true);
  });

  it('should return false for nums = [1, 2, 3, 5]', () => {
    const nums = [1, 2, 3, 5];
    const result = canPartition(nums);
    expect(result).toBe(false);
  });

  it('should return false for nums = [1, 2, 5]', () => {
    const nums = [1, 2, 5];
    const result = canPartition(nums);
    expect(result).toBe(false);
  });
});
