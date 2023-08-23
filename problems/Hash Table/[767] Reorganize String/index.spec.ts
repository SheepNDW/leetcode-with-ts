import { describe, expect, it } from 'vitest';
import { reorganizeString } from '.';

describe('reorganizeString', () => {
  it('should return a rearranged string where no two adjacent characters are the same', () => {
    const s = 'aab';
    const result = reorganizeString(s);
    expect(result).toEqual('aba');
  });

  it('should return "" when rearrangement is not possible', () => {
    const s = 'aaab';
    const result = reorganizeString(s);
    expect(result).toEqual('');
  });

  // 測試邊界情況，只有一個字符的輸入
  it('should handle the edge case of a single character input', () => {
    const s = 'a';
    const result = reorganizeString(s);
    expect(result).toEqual('a');
  });

  // 測試包含所有相同字元的情況
  it('should return "" when all characters are the same and length is greater than 1', () => {
    const s = 'aaa';
    const result = reorganizeString(s);
    expect(result).toEqual('');
  });
});
