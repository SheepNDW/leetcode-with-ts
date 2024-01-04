import { describe, expect, it } from 'vitest';
import { minOperations } from '.';

describe.skip('minOperations', () => {
  it('should return 4 for nums = [2,3,3,2,2,4,2,3,4]', () => {
    const nums = [2, 3, 3, 2, 2, 4, 2, 3, 4];
    const result = minOperations(nums);
    expect(result).toBe(4);
  });

  it('should return -1 for nums = [2,1,2,2,3,3]', () => {
    const nums = [2, 1, 2, 2, 3, 3];
    const result = minOperations(nums);
    expect(result).toBe(-1);
  });
});
