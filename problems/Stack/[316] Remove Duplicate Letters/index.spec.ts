import { describe, expect, it } from 'vitest';
import { removeDuplicateLetters } from '.';

describe('removeDuplicateLetters', () => {
  const testCases: [string, string][] = [
    ['bcabc', 'abc'], // 基本測試
    ['cbacdcbc', 'acdb'], // 基本測試
    ['abc', 'abc'], // 無重複字元
    ['bbbbb', 'b'], // 所有字元都重複
    ['abacb', 'abc'], // 部分字元重複
    ['mitnlruhznjfyzmtmfnstsxwktxlboxutbic', 'ilrhjfyzmnstwkboxuc'], // 大型測試
    ['cdadabcc', 'adbc'],
  ];

  for (const [s, expected] of testCases) {
    it(`should return ${expected} when s = ${s}`, () => {
      const result = removeDuplicateLetters(s);
      expect(result).toBe(expected);
    });
  }
});
