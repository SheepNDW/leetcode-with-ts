import { describe, expect, it } from 'vitest';
import { countOfSubstrings } from '.';

describe.skip('countOfSubstrings', () => {
  it('should return 0 for word = "aeioqq", k = 1', () => {
    const word = 'aeioqq';
    const k = 1;

    const result = countOfSubstrings(word, k);

    expect(result).toEqual(0);
  });

  it('should return 1 for word = "aeiou", k = 0', () => {
    const word = 'aeiou';
    const k = 0;

    const result = countOfSubstrings(word, k);

    expect(result).toEqual(1);
  });

  it('should return 3 for word = "ieaouqqieaouqq", k = 1', () => {
    const word = 'ieaouqqieaouqq';
    const k = 1;

    const result = countOfSubstrings(word, k);

    expect(result).toEqual(3);
  });

  it('should return 3 for word = "iqeaouqi", k = 2', () => {
    const word = 'iqeaouqi';
    const k = 2;

    const result = countOfSubstrings(word, k);

    expect(result).toEqual(3);
  });
});
