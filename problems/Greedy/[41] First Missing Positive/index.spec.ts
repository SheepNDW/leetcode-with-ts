import { describe, expect, it } from 'vitest';
import { firstMissingPositive } from '.';

describe.skip('firstMissingPositive', () => {
  it('should return 3 for nums=[1,2,0]', () => {
    const nums = [1, 2, 0];

    const result = firstMissingPositive(nums);

    expect(result).toBe(3);
  });

  it('should return 2 for nums=[3,4,-1,1]', () => {
    const nums = [3, 4, -1, 1];

    const result = firstMissingPositive(nums);

    expect(result).toBe(2);
  });

  it('should return 1 for nums=[7,8,9,11,12]', () => {
    const nums = [7, 8, 9, 11, 12];

    const result = firstMissingPositive(nums);

    expect(result).toBe(1);
  });
});
