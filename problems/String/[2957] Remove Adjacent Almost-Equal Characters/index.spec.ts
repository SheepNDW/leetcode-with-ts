import { describe, expect, it } from 'vitest';
import { removeAlmostEqualCharacters } from '.';

describe.skip('removeAlmostEqualCharacters', () => {
  it('should return 2 for the input "aaaaa"', () => {
    const word = 'aaaaa';
    const expected = 2;

    const result = removeAlmostEqualCharacters(word);

    expect(result).toBe(expected);
  });

  it('should return 2 for the input "abddez"', () => {
    const word = 'abddez';
    const expected = 2;

    const result = removeAlmostEqualCharacters(word);

    expect(result).toBe(expected);
  });

  it('should return 3 for the input "zyxyxyz"', () => {
    const word = 'zyxyxyz';
    const expected = 3;

    const result = removeAlmostEqualCharacters(word);

    expect(result).toBe(expected);
  });
});
