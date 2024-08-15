import { describe, expect, it } from 'vitest';
import { minSwaps } from '.';

describe.skip('minSwaps', () => {
  it('should return 1 for nums = [0,1,0,1,1,0,0]', () => {
    const nums = [0, 1, 0, 1, 1, 0, 0];

    const result = minSwaps(nums);

    expect(result).toBe(1);
  });

  it('should return 2 for nums = [0,1,1,1,0,0,1,1,0]', () => {
    const nums = [0, 1, 1, 1, 0, 0, 1, 1, 0];

    const result = minSwaps(nums);

    expect(result).toBe(2);
  });

  it('should return 0 for nums = [1,1,0,0,1]', () => {
    const nums = [1, 1, 0, 0, 1];

    const result = minSwaps(nums);

    expect(result).toBe(0);
  });

  it('should return 1 for nums = [1,0,1,0,1]', () => {
    const nums = [1, 0, 1, 0, 1];

    const result = minSwaps(nums);

    expect(result).toBe(1);
  });
});
