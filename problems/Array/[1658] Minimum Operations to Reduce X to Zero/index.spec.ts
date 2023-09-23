import { describe, expect, it } from 'vitest';
import { minOperations } from '.';

describe('minOperations', () => {
  it('should return 2 when nums = [1,1,4,2,3] and x = 5', () => {
    const nums = [1, 1, 4, 2, 3];
    const x = 5;

    const result = minOperations(nums, x);

    expect(result).toBe(2);
  });

  it('should return -1 when nums = [5,6,7,8,9] and x = 4', () => {
    const nums = [5, 6, 7, 8, 9];
    const x = 4;

    const result = minOperations(nums, x);

    expect(result).toBe(-1);
  });

  it('should return 5 when nums = [3,2,20,1,1,3] and x = 10', () => {
    const nums = [3, 2, 20, 1, 1, 3];
    const x = 10;

    const result = minOperations(nums, x);

    expect(result).toBe(5);
  });

  it('should return 1 when nums = [5,2,3,1,1] and x = 5', () => {
    const nums = [5, 2, 3, 1, 1];
    const x = 5;

    const result = minOperations(nums, x);

    expect(result).toBe(1);
  });
});
