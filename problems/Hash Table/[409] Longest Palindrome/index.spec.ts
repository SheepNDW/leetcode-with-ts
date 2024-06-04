import { describe, expect, it } from 'vitest';
import { longestPalindrome } from '.';

describe.skip('longestPalindrome', () => {
  it('should return 7 for s = "abccccdd"', () => {
    const s = 'abccccdd';

    const result = longestPalindrome(s);

    expect(result).toBe(7);
  });

  it('should return 1 for s = "a"', () => {
    const s = 'a';

    const result = longestPalindrome(s);

    expect(result).toBe(1);
  });
});
