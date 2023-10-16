import { describe, expect, it } from 'vitest';
import { minDeletions } from '.';

describe('minDeletions', () => {
  it('should return 0 for "aab"', () => {
    expect(minDeletions('aab')).toBe(0);
  });

  it('should return 2 for "aaabbbcc"', () => {
    expect(minDeletions('aaabbbcc')).toBe(2);
  });

  it('should return 2 for "ceabaacb"', () => {
    expect(minDeletions('ceabaacb')).toBe(2);
  });

  it('should return 3 when s = "abcabc"', () => {
    expect(minDeletions('abcabc')).toBe(3);
  });
});
