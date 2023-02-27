import { describe, it, expect } from 'vitest';
import { halvesAreAlike } from '.';

describe('halvesAreAlike()', () => {
  it('should return true when the number of vowels is the same in both halves of the string', () => {
    const s = 'book';
    expect(halvesAreAlike(s)).toBeTruthy();
  });

  it('should return false when the number of vowels is not the same in both halves of the string', () => {
    const s = 'textbook';
    expect(halvesAreAlike(s)).toBeFalsy();
  });

  it('should be case-insensitive', () => {
    const s = 'Uo';
    expect(halvesAreAlike(s)).toBeTruthy();
  });
});

/**
 * @link https://leetcode.com/problems/determine-if-string-halves-are-alike/
 */
