import { describe, expect, it } from 'vitest';
import { maxScoreWords } from '.';

describe.skip('maxScoreWords', () => {
  it('should return 23', () => {
    const words = ['dog', 'cat', 'dad', 'good'];
    const letters = ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'];
    const score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const result = maxScoreWords(words, letters, score);

    expect(result).toBe(23);
  });

  it('should return 27', () => {
    const words = ['xxxz', 'ax', 'bx', 'cx'];
    const letters = ['z', 'a', 'b', 'c', 'x', 'x', 'x'];
    const score = [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10];

    const result = maxScoreWords(words, letters, score);

    expect(result).toBe(27);
  });

  it('should return 0', () => {
    const words = ['leetcode'];
    const letters = ['l', 'e', 't', 'c', 'o', 'd'];
    const score = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];

    const result = maxScoreWords(words, letters, score);

    expect(result).toBe(0);
  });
});
