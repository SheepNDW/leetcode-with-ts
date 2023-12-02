import { describe, expect, it } from 'vitest';
import { countCharacters } from '.';

describe.skip('countCharacters', () => {
  it('should return the sum of lengths of all good strings in words', () => {
    const words1 = ['cat', 'bt', 'hat', 'tree'];
    const chars1 = 'atach';
    const words2 = ['hello', 'world', 'leetcode'];
    const chars2 = 'welldonehoneyr';

    const result1 = countCharacters(words1, chars1);
    const result2 = countCharacters(words2, chars2);

    expect(result1).toBe(6);
    expect(result2).toBe(10);
  });

  it('should return 0 if no words can be formed', () => {
    const words = ['apple', 'orange'];
    const chars = 'abc';

    const result = countCharacters(words, chars);

    expect(result).toBe(0);
  });

  it('should return 0 if chars is empty', () => {
    const words = ['apple', 'orange'];
    const chars = '';

    const result = countCharacters(words, chars);

    expect(result).toBe(0);
  });

  it('should return 0 if words contain characters not in chars', () => {
    const words = ['abc', 'def'];
    const chars = 'ab';

    const result = countCharacters(words, chars);

    expect(result).toBe(0);
  });
});
