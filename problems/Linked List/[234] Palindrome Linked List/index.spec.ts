import { describe, expect, it } from 'vitest';
import { isPalindrome } from '.';
import { createList } from '../../utils/list';

describe.skip('isPalindrome', () => {
  it('should return true for a palindrome list [1,2,2,1]', () => {
    const head = createList([1, 2, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it('should return false for a non-palindrome list [1,2]', () => {
    const head = createList([1, 2]);
    expect(isPalindrome(head)).toBe(false);
  });

  it('should return true for an empty list', () => {
    const head = createList([]);
    expect(isPalindrome(head)).toBe(true);
  });

  it('should return true for a single-node list [1]', () => {
    const head = createList([1]);
    expect(isPalindrome(head)).toBe(true);
  });
});
