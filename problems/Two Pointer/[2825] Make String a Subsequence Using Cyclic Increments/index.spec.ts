import { describe, expect, it } from 'vitest';
import { canMakeSubsequence } from '.';

describe.skip('canMakeSubsequence', () => {
  it('should return true for str1 = "abc", str2 = "ad"', () => {
    const str1 = 'abc';
    const str2 = 'ad';

    const result = canMakeSubsequence(str1, str2);

    expect(result).toBe(true);
  });

  it('should return true for str1 = "zc", str2 = "ad"', () => {
    const str1 = 'zc';
    const str2 = 'ad';

    const result = canMakeSubsequence(str1, str2);

    expect(result).toBe(true);
  });

  it('should return false for str1 = "ab", str2 = "d"', () => {
    const str1 = 'ab';
    const str2 = 'd';

    const result = canMakeSubsequence(str1, str2);

    expect(result).toBe(false);
  });
});
