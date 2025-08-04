import { describe, expect, it } from 'vitest';
import { longestSubsequence } from '.';

describe('longestSubsequence', () => {
  it('example 1', () => {
    const s = '1001010';
    const k = 5;
    const result = longestSubsequence(s, k);
    expect(result).toBe(5);
  });

  it('example 2', () => {
    const s = '00101001';
    const k = 1;
    const result = longestSubsequence(s, k);
    expect(result).toBe(6);
  });

  it('example 3', () => {
    const s =
      '111100010000011101001110001111000000001011101111111110111000011111011000010101110100110110001111001001011001010011010000011111101001101000000101101001110110000111101011000101';
    const k = 11713332;
    const result = longestSubsequence(s, k);
    expect(result).toBe(96);
  });
});
