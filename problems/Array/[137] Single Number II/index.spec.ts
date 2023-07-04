import { describe, expect, it } from 'vitest';
import { singleNumber } from '.';

describe('singleNumber', () => {
  it('should return 3 when nums = [2,2,3,2]', () => {
    const nums = [2, 2, 3, 2];
    const result = singleNumber(nums);
    expect(result).toBe(3);
  });

  it('should return 99 when nums = [0,1,0,1,0,1,99]', () => {
    const nums = [0, 1, 0, 1, 0, 1, 99];
    const result = singleNumber(nums);
    expect(result).toBe(99);
  });

  it('should return 1 when nums = [1]', () => {
    const nums = [1];
    const result = singleNumber(nums);
    expect(result).toBe(1);
  });
});
