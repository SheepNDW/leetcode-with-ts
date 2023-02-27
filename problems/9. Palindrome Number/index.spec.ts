import { describe, it, expect } from 'vitest';
import { isPalindrome } from '.';

describe('isPalindrome()', () => {
  it('should return true for palindrome number', () => {
    const x = 121;
    expect(isPalindrome(x)).toBe(true);
  });

  it('should return true for negative number', () => {
    const x = -10101;
    expect(isPalindrome(x)).toBe(false);
  });

  it('should return false for non-palindrome number', () => {
    const x = 10;
    expect(isPalindrome(x)).toBe(false);
  });

  it('should return false for negative non-palindrome number', () => {
    const x = -121;
    expect(isPalindrome(x)).toBe(false);
  });

  it('should return true for single digit number', () => {
    const x = 0;
    expect(isPalindrome(x)).toBe(true);
  });

  it('should handle large numbers', () => {
    const x = 2147483647;
    expect(isPalindrome(x)).toBe(false);
  });

  it('should handle large negative numbers', () => {
    const x = -2147483647;
    expect(isPalindrome(x)).toBe(false);
  });

  it('should handle edge case with single negative digit', () => {
    const x = -1;
    expect(isPalindrome(x)).toBe(false);
  });

  it('should handle edge case with single positive digit', () => {
    const x = 9;
    expect(isPalindrome(x)).toBe(true);
  });
});

/**
 * @link https://leetcode.com/problems/palindrome-number/
 */
