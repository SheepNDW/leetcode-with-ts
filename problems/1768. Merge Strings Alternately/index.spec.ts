import { describe, expect, it } from 'vitest';
import { mergeAlternately } from '.';

describe('mergeAlternately', () => {
  it('should merge letters in alternating order', () => {
    const word1 = 'abc';
    const word2 = 'pqr';
    expect(mergeAlternately(word1, word2)).toBe('apbqcr');
  });

  it('if word2 is longer, "rs" should appended to the end', () => {
    const word1 = 'ab';
    const word2 = 'pqrs';
    expect(mergeAlternately(word1, word2)).toBe('apbqrs');
  });

  it('if word1 is longer, "cd" should appended to the end', () => {
    const word1 = 'abcd';
    const word2 = 'pq';
    expect(mergeAlternately(word1, word2)).toBe('apbqcd');
  });
});
