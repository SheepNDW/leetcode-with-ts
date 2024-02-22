import { describe, expect, it } from 'vitest';
import { missingNumber } from '.';

describe.skip('missingNumber', () => {
  it('should return 2 when input is [3, 0, 1]', () => {
    const nums = [3, 0, 1];

    const result = missingNumber(nums);

    expect(result).toBe(2);
  });

  it('should return 2 when input is [0, 1]', () => {
    const nums = [0, 1];

    const result = missingNumber(nums);

    expect(result).toBe(2);
  });

  it('should return 8 when input is [9, 6, 4, 2, 3, 5, 7, 0, 1]', () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

    const result = missingNumber(nums);

    expect(result).toBe(8);
  });
});
