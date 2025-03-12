import { describe, expect, it } from 'vitest';
import { numberOfSubstrings } from '.';

describe.skip('numberOfSubstrings', () => {
  it('should return 10 for s = "abcabc"', () => {
    const s = 'abcabc';
    const result = numberOfSubstrings(s);
    expect(result).toEqual(10);
  });

  it('should return 3 for s = "aaacb"', () => {
    const s = 'aaacb';
    const result = numberOfSubstrings(s);
    expect(result).toEqual(3);
  });

  it('should return 1 for s = "abc"', () => {
    const s = 'abc';
    const result = numberOfSubstrings(s);
    expect(result).toEqual(1);
  });
});
