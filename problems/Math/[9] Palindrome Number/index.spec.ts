import { describe, expect, it } from 'vitest';
import { isPalindrome } from '.';

describe('isPalindrome', () => {
  it('should return true when x = 121', () => {
    const x = 121;
    const result = isPalindrome(x);
    expect(result).toBe(true);
  });

  it('should return false when x = -121', () => {
    const x = -121;
    const result = isPalindrome(x);
    expect(result).toBe(false);
  });

  it('should return false when x = 10', () => {
    const x = 10;
    const result = isPalindrome(x);
    expect(result).toBe(false);
  });

  it('should return false when x = 2147483647', () => {
    const x = 2147483647;
    const result = isPalindrome(x);
    expect(result).toBe(false);
  });

  it('should return false when x = -2147483647', () => {
    const x = -2147483647;
    const result = isPalindrome(x);
    expect(result).toBe(false);
  });

  it('should return true for single-digit numbers', () => {
    for (let x = 0; x <= 9; x++) {
      const result = isPalindrome(x);
      expect(result).toBe(true);
    }
  });
});
