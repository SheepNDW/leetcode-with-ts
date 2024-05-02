import { describe, expect, it } from 'vitest';
import { wonderfulSubstrings } from '.';

describe.skip('wonderfulSubstrings', () => {
  it('should return 4 for word = "aba"', () => {
    const word = 'aba';
    const result = wonderfulSubstrings(word);
    expect(result).toBe(4);
  });

  it('should return 9 for word = "aabb"', () => {
    const word = 'aabb';
    const result = wonderfulSubstrings(word);
    expect(result).toBe(9);
  });

  it('should return 2 for word = "he"', () => {
    const word = 'he';
    const result = wonderfulSubstrings(word);
    expect(result).toBe(2);
  });
});
