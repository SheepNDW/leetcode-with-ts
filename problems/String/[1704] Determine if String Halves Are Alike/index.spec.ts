import { describe, it, expect } from 'vitest';
import { halvesAreAlike } from '.';

describe.skip('halvesAreAlike', () => {
  it('should return true when the number of vowels is the same in both halves of the string', () => {
    const s = 'book';
    const result = halvesAreAlike(s);
    expect(result).toBe(true);
  });

  it('should return false when the number of vowels is not the same in both halves of the string', () => {
    const s = 'textbook';
    const result = halvesAreAlike(s);
    expect(result).toBe(false);
  });

  it('should be case-insensitive', () => {
    const s = 'Uo';
    const result = halvesAreAlike(s);
    expect(result).toBe(true);
  });
});

/**
 * @link https://leetcode.com/problems/determine-if-string-halves-are-alike/
 */
