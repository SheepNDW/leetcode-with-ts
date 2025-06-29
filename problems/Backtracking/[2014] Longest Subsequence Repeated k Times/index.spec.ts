import { describe, expect, it } from 'vitest';
import { longestSubsequenceRepeatedK } from '.';

describe('longestSubsequenceRepeatedK', () => {
  it('example 1', () => {
    const s = 'letsleetcode';
    const k = 2;

    const result = longestSubsequenceRepeatedK(s, k);

    expect(result).toBe('let');
  });

  it('example 2', () => {
    const s = 'bb';
    const k = 2;

    const result = longestSubsequenceRepeatedK(s, k);

    expect(result).toBe('b');
  });

  it('example 3', () => {
    const s = 'ab';
    const k = 2;

    const result = longestSubsequenceRepeatedK(s, k);

    expect(result).toBe('');
  });

  it('example 4', () => {
    const s = 'bbabbabbbbabaababab';
    const k = 3;

    const result = longestSubsequenceRepeatedK(s, k);

    expect(result).toBe('bbbb');
  });
});
