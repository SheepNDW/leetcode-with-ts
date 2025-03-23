import { describe, expect, it } from 'vitest';
import { wordBreak } from '.';

describe.skip('word break', () => {
  it('should return true when s can be segmented into a space-separated sequence of dictionary words', () => {
    const s1 = 'leetcode';
    const wordDict1 = ['leet', 'code'];

    const result1 = wordBreak(s1, wordDict1);

    expect(result1).toBe(true);

    const s2 = 'applepenapple';
    const wordDict2 = ['apple', 'pen'];

    const result2 = wordBreak(s2, wordDict2);

    expect(result2).toBe(true);
  });

  it('should return false when s cannot be segmented into a space-separated sequence of dictionary words', () => {
    const s = 'catsandog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];

    const result = wordBreak(s, wordDict);

    expect(result).toBe(false);
  });
});
