import { describe, expect, it } from 'vitest';
import { lengthOfLongestSubstring } from '.';

describe.skip('lengthOfLongestSubstring', () => {
  it('should return 3 for s = "abcabcbb"', () => {
    const s = 'abcabcbb';

    const result = lengthOfLongestSubstring(s);

    expect(result).toBe(3);
  });

  it('should return 1 for s = "bbbbb"', () => {
    const s = 'bbbbb';

    const result = lengthOfLongestSubstring(s);

    expect(result).toBe(1);
  });

  it('should return 3 for s = "pwwkew"', () => {
    const s = 'pwwkew';

    const result = lengthOfLongestSubstring(s);

    expect(result).toBe(3);
  });
});
