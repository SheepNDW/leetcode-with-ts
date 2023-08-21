import { describe, expect, it } from 'vitest';
import { repeatedSubstringPattern } from '.';

describe('repeatedSubstringPattern', () => {
  it('should return true when the string can be constructed by a repeated substring', () => {
    const input = 'abab';

    const result = repeatedSubstringPattern(input);

    expect(result).toBe(true);
  });

  it('should return false when the string cannot be constructed by a repeated substring', () => {
    const input = 'aba';

    const result = repeatedSubstringPattern(input);

    expect(result).toBe(false);
  });

  it('should return true when the string is repeated with different lengths of substring', () => {
    const input = 'abcabcabcabc';

    const result = repeatedSubstringPattern(input);

    expect(result).toBe(true);
  });

  it('should return false for a string with only one character', () => {
    const input = 'a';

    const result = repeatedSubstringPattern(input);

    expect(result).toBe(false);
  });

  it('should return true for a string with all identical characters', () => {
    const input = 'aaaa';

    const result = repeatedSubstringPattern(input);

    expect(result).toBe(true);
  });
});
