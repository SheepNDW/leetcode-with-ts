import { describe, expect, it } from 'vitest';
import { replaceWords } from '.';

describe.skip('replaceWords', () => {
  it('should replace sentence "the cattle was rattled by the battery" with "the cat was rat by the bat"', () => {
    const dictionary = ['cat', 'bat', 'rat'];
    const sentence = 'the cattle was rattled by the battery';
    const expected = 'the cat was rat by the bat';

    const result = replaceWords(dictionary, sentence);

    expect(result).toBe(expected);
  });

  it('should replace sentence "aadsfasf absbs bbab cadsfafs" with "a a b c"', () => {
    const dictionary = ['a', 'b', 'c'];
    const sentence = 'aadsfasf absbs bbab cadsfafs';
    const expected = 'a a b c';

    const result = replaceWords(dictionary, sentence);

    expect(result).toBe(expected);
  });
});
