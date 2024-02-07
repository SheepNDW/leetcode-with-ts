import { describe, expect, it } from 'vitest';
import { groupAnagrams } from '.';

describe.skip('groupAnagrams', () => {
  it('should group anagrams together from ["eat","tea","tan","ate","nat","bat"]', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

    const output = groupAnagrams(input);

    // 對輸出的每個分組進行排序，再對整個輸出進行排序
    const sortedOutput = output
      .map((group) => group.sort())
      .sort((a, b) => a[0].localeCompare(b[0]));
    const expected = [['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']]
      .map((group) => group.sort())
      .sort((a, b) => a[0].localeCompare(b[0]));
    expect(sortedOutput).toEqual(expected);
  });

  it('should group anagrams together from ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]', () => {
    const input = ['cab', 'tin', 'pew', 'duh', 'may', 'ill', 'buy', 'bar', 'max', 'doc'];

    const output = groupAnagrams(input);
    console.log(output);
    const sortedOutput = output
      .map((group) => group.sort())
      .sort((a, b) => a[0].localeCompare(b[0]));
    const expected = [
      ['max'],
      ['buy'],
      ['doc'],
      ['may'],
      ['ill'],
      ['duh'],
      ['tin'],
      ['bar'],
      ['pew'],
      ['cab'],
    ]
      .map((group) => group.sort())
      .sort((a, b) => a[0].localeCompare(b[0]));
    expect(sortedOutput).toEqual(expected);
  });

  it('should return [[""]] for [""]', () => {
    const input = [''];

    const output = groupAnagrams(input);

    expect(output).toEqual([['']]);
  });

  it('should return [["a"]] for ["a"]', () => {
    const input = ['a'];

    const output = groupAnagrams(input);

    expect(output).toEqual([['a']]);
  });
});
