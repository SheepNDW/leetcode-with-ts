import { describe, expect, it } from 'vitest';
import { letterCombinations } from '.';

describe('letterCombinations', () => {
  it('should return all possible letter combinations for "23"', () => {
    const input = '23';
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

    const result = letterCombinations(input);

    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toEqual(expected.length);
  });

  it('should return an empty array for an empty string', () => {
    const input = '';
    const expected: string[] = [];

    const result = letterCombinations(input);

    expect(result).toEqual(expected);
  });

  it('should return all possible letter combinations for "2"', () => {
    const input = '2';
    const expected = ['a', 'b', 'c'];
    const result = letterCombinations(input);

    expect(result).toEqual(expect.arrayContaining(expected));

    expect(result.length).toEqual(expected.length);
  });
});
