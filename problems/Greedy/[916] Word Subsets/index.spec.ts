import { describe, expect, it } from 'vitest';
import { wordSubsets } from '.';

describe.skip('wordSubsets', () => {
  it('Example 1', () => {
    const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
    const words2 = ['e', 'o'];

    const result = wordSubsets(words1, words2);

    expect(result).toEqual(['facebook', 'google', 'leetcode']);
  });

  it('Example 2', () => {
    const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
    const words2 = ['l', 'e'];

    const result = wordSubsets(words1, words2);

    expect(result).toEqual(['apple', 'google', 'leetcode']);
  });
});
