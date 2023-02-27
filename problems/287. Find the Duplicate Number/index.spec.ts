import { describe, it, expect } from 'vitest';
import { findDuplicate } from '.';

describe('findDuplicate()', () => {
  it('should return the duplicate number', () => {
    const nums = [1, 3, 4, 2, 2];
    const result = findDuplicate(nums);
    expect(result).toBe(2);
  });

  it('should return the duplicate number when it is the first element in the array', () => {
    const nums = [1, 1, 3, 4, 2];
    const result = findDuplicate(nums);
    expect(result).toBe(1);
  });

  it('should return the duplicate number when it is the last element in the array', () => {
    const nums = [1, 3, 4, 2, 5, 6, 7, 8, 9, 10, 5];
    const result = findDuplicate(nums);
    expect(result).toBe(5);
  });
});

/**
 * @link https://leetcode.com/problems/find-the-duplicate-number/
 */
