import { describe, it, expect } from 'vitest';
import { closeStrings } from '.';

describe.skip('closeStrings()', () => {
  it('should return true when both strings are the same', () => {
    const word1 = 'abc';
    const word2 = 'abc';

    const result = closeStrings(word1, word2);

    expect(result).toBe(true);
  });

  it('should return false when the lengths of the two strings are different', () => {
    const word1 = 'abc';
    const word2 = 'ab';

    const result = closeStrings(word1, word2);

    expect(result).toBe(false);
  });

  it('should return true when both strings have the same set of characters', () => {
    const word1 = 'abc';
    const word2 = 'bca';

    const result = closeStrings(word1, word2);

    expect(result).toBe(true);
  });

  it('should return false when both strings have different sets of characters', () => {
    const word1 = 'abc';
    const word2 = 'def';

    const result = closeStrings(word1, word2);

    expect(result).toBe(false);
  });

  it('should return false when both strings have different character frequencies', () => {
    const word1 = 'abbzzca';
    const word2 = 'babzzcz';

    const result = closeStrings(word1, word2);

    expect(result).toBe(false);
  });

  it('should return false when both strings have different frequency of characters', () => {
    const word1 = 'abbbzcf';
    const word2 = 'babzzcz';

    const result = closeStrings(word1, word2);

    expect(result).toBe(false);
  });

  it('should return true when both strings have the same set of characters but different frequency of characters', () => {
    const word1 = 'cabbba';
    const word2 = 'abbccc';

    const result = closeStrings(word1, word2);

    expect(result).toBe(true);
  });
});

/**
 * @link https://leetcode.com/problems/determine-if-two-strings-are-close/
 */
