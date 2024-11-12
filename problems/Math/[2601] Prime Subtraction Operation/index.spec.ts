import { describe, expect, it } from 'vitest';
import { primeSubOperation } from '.';

describe.skip('primeSubOperation', () => {
  it('should return true for nums = [4,9,6,10]', () => {
    const nums = [4, 9, 6, 10];
    const result = primeSubOperation(nums);
    expect(result).toBe(true);
  });

  it('should return true for nums = [6,8,11,12]', () => {
    const nums = [6, 8, 11, 12];
    const result = primeSubOperation(nums);
    expect(result).toBe(true);
  });

  it('should return false for nums = [5,8,3]', () => {
    const nums = [5, 8, 3];
    const result = primeSubOperation(nums);
    expect(result).toBe(false);
  });
});
