import { describe, it, expect } from 'vitest';
import { maximum69Number } from '.';

describe('maximum69Number()', () => {
  it('should return maximum number when there is one 6', () => {
    const num = 9669;
    expect(maximum69Number(num)).toBe(9969);
  });

  it('should return maximum number when there are multiple 6s', () => {
    const num = 6666;
    expect(maximum69Number(num)).toBe(9666);
  });

  it('should return maximum number when all digits are 9', () => {
    const num = 9999;
    expect(maximum69Number(num)).toBe(9999);
  });

  it('should return maximun number with only one 6', () => {
    const num = 6;
    expect(maximum69Number(num)).toBe(9);
  });
});

/**
 * @link https://leetcode.com/problems/maximum-69-number/
 */
