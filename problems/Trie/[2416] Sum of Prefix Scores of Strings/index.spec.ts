import { describe, expect, it } from 'vitest';
import { sumPrefixScores } from '.';

describe.skip('sumPrefixScores', () => {
  it('should return [5,4,3,2] when words = ["abc","ab","bc","b"]', () => {
    const words = ['abc', 'ab', 'bc', 'b'];

    const result = sumPrefixScores(words);

    expect(result).toEqual([5, 4, 3, 2]);
  });

  it('should return [4] when words = ["abcd"]', () => {
    const words = ['abcd'];

    const result = sumPrefixScores(words);

    expect(result).toEqual([4]);
  });
});
