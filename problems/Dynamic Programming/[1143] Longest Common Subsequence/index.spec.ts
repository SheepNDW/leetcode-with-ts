import { describe, expect, it } from 'vitest';
import { longestCommonSubsequence } from '.';

describe.skip('longestCommonSubsequence', () => {
  it('should return 3 for text1 = "abcde" and text2 = "ace"', () => {
    const text1 = 'abcde';
    const text2 = 'ace';
    const expected = 3;

    const result = longestCommonSubsequence(text1, text2);

    expect(result).toBe(expected);
  });

  it('should return 3 for text1 = "abc" and text2 = "abc"', () => {
    const text1 = 'abc';
    const text2 = 'abc';
    const expected = 3;

    const result = longestCommonSubsequence(text1, text2);

    expect(result).toBe(expected);
  });

  it('should return 0 for text1 = "abc" and text2 = "def" as there is no common subsequence', () => {
    const text1 = 'abc';
    const text2 = 'def';
    const expected = 0;

    const result = longestCommonSubsequence(text1, text2);

    expect(result).toBe(expected);
  });
});
