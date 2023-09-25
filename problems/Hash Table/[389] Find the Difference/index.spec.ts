import { describe, expect, it } from 'vitest';
import { findTheDifference } from '.';

describe('findTheDifference', () => {
  const testCases: [string, string, string][] = [
    ['abcd', 'abcde', 'e'], // 基本測試
    ['', 'y', 'y'], // 空字串的情況
    ['a', 'aa', 'a'], // 只有一個字元的情況
    ['apple', 'applae', 'a'], // 重複字元的情況
  ];

  for (const [s, t, expected] of testCases) {
    it(`should return ${expected} when s = ${s} and t = ${t}`, () => {
      const result = findTheDifference(s, t);
      expect(result).toBe(expected);
    });
  }
});
