import { describe, expect, it } from 'vitest';
import { sortVowels } from '.';

describe.skip('sortVowels', () => {
  it('should return the string with vowels sorted by ASCII value, and consonants in the same place', () => {
    const input = 'lEetcOde';
    const output = 'lEOtcede';
    expect(sortVowels(input)).toBe(output);
  });

  it('should return the original string if there are no vowels', () => {
    const input = 'lYmpH';
    const output = 'lYmpH';
    expect(sortVowels(input)).toBe(output);
  });

  it('should handle strings with lowercase and uppercase vowels', () => {
    const input = 'AbcEiOU';
    const output = 'AbcEOUi';
    expect(sortVowels(input)).toBe(output);
  });

  it('should handle strings with only vowels', () => {
    const input = 'euioa';
    const output = 'aeiou';
    expect(sortVowels(input)).toBe(output);
  });

  it('should return an empty string if the input is an empty string', () => {
    const input = '';
    const output = '';
    expect(sortVowels(input)).toBe(output);
  });
});
