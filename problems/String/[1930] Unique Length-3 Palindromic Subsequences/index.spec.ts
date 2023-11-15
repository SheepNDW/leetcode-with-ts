import { describe, expect, it } from 'vitest';
import { countPalindromicSubsequence } from '.';

describe.skip('countPalindromicSubsequence', () => {
  it('should return 3 when given "aabca"', () => {
    const s = 'aabca';

    const result = countPalindromicSubsequence(s);

    expect(result).toEqual(3);
  });

  it('should return 0 when given "adc"', () => {
    const s = 'adc';

    const result = countPalindromicSubsequence(s);

    expect(result).toEqual(0);
  });

  it('should return 4 when given "bbcbaba"', () => {
    const s = 'bbcbaba';

    const result = countPalindromicSubsequence(s);

    expect(result).toEqual(4);
  });

  it('it should return 161 when given "tlpjzdmtwderpkpmgoyrcxttiheassztncqvnfjeyxxp"', () => {
    const s = 'tlpjzdmtwderpkpmgoyrcxttiheassztncqvnfjeyxxp';

    const result = countPalindromicSubsequence(s);

    expect(result).toBe(161);
  });
});
