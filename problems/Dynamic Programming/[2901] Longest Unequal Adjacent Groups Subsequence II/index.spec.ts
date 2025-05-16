import { describe, expect, it } from 'vitest';
import { getWordsInLongestSubsequence } from '.';

describe.skip('getWordsInLongestSubsequence', () => {
  it('example 1', () => {
    const words = ['bab', 'dab', 'cab'];
    const groups = [1, 2, 2];

    const result = getWordsInLongestSubsequence(words, groups);

    // ["bab","cab"] or ["bab","dab"] are valid
    expect([
      ['bab', 'cab'],
      ['bab', 'dab'],
    ]).toContainEqual(result);
  });

  it('example 2', () => {
    const words = ['a', 'b', 'c', 'd'];
    const groups = [1, 2, 3, 4];

    const result = getWordsInLongestSubsequence(words, groups);

    expect(result).toEqual(['a', 'b', 'c', 'd']);
  });
});
