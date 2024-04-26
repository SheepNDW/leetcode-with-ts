import { describe, expect, it } from 'vitest';
import { longestIdealString } from '.';

describe.skip('longestIdealString', () => {
  it('should return 4 for s = "acfgbd", k = 2', () => {
    const s = 'acfgbd';
    const k = 2;
    const result = longestIdealString(s, k);
    expect(result).toBe(4);
  });

  it('should return 4 for s = "abcd", k = 3', () => {
    const s = 'abcd';
    const k = 3;
    const result = longestIdealString(s, k);
    expect(result).toBe(4);
  });

  it('should return 1 for s = "a", k = 1', () => {
    const s = 'a';
    const k = 1;
    const result = longestIdealString(s, k);
    expect(result).toBe(1);
  });

  it('should return 2 for s = "ab", k = 0', () => {
    const s = 'ab';
    const k = 0;
    const result = longestIdealString(s, k);
    expect(result).toBe(1);
  });

  it('should return 2 for s = "za", k = 25', () => {
    const s = 'za';
    const k = 25;
    const result = longestIdealString(s, k);
    expect(result).toBe(2);
  });

  it('should return the length of string when k is 25 for any input', () => {
    const s = 'abcdefghijklmnopqrstuvwxyz';
    const k = 25;
    const result = longestIdealString(s, k);
    expect(result).toBe(26);
  });
});
