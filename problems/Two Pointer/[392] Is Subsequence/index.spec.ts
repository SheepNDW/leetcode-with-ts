import { describe, expect, it } from 'vitest';
import { isSubsequence } from '.';

describe('isSubsequence', () => {
  it('should return true when s is a subsequence of t', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
    expect(isSubsequence('a', 'aaa')).toBe(true);
    expect(isSubsequence('ace', 'abcde')).toBe(true);
  });

  it('should return false when s is not a subsequence of t', () => {
    expect(isSubsequence('aec', 'abcde')).toBe(false);
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  });

  it('should return false when s is non-empty and t is empty', () => {
    expect(isSubsequence('abc', '')).toBe(false);
  });

  it('should return true when s and t are both empty', () => {
    expect(isSubsequence('', '')).toBe(true);
  });

  it('should return true when s is empty and t is non-empty', () => {
    expect(isSubsequence('', 'ahbgdc')).toBe(true);
  });
});
