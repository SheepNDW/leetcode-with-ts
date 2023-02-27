import { describe, it, expect } from 'vitest';
import { reverse } from '.';

describe('reverse()', () => {
  it('should reverse the given positive integer and return the result', () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(120)).toBe(21);
  });
  it('should reverse the given negative integer and return the result', () => {
    expect(reverse(-123)).toBe(-321);
    expect(reverse(-120)).toBe(-21);
  });
  it('should return 0 when the given integer is the maximum value', () => {
    expect(reverse(2147483647)).toBe(0);
  });
  it('should return 0 when the given integer is the minimum value', () => {
    expect(reverse(-2147483648)).toBe(0);
  });
  it('should return 0 when the given integer is zero', () => {
    expect(reverse(0)).toBe(0);
  });
});

/**
 * @link https://leetcode.com/problems/reverse-integer/
 */
