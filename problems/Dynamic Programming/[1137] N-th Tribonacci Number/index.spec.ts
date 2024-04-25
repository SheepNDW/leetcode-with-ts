import { describe, it, expect } from 'vitest';
import { tribonacci } from '.';

describe.skip('tribonacci', () => {
  it('should return 0 for n = 0', () => {
    const n = 0;
    const expected = 0;
    expect(tribonacci(n)).toBe(expected);
  });

  it('should return 1 for n = 1 or n = 2', () => {
    const n1 = 1;
    const n2 = 2;
    const expected = 1;
    expect(tribonacci(n1)).toBe(expected);
    expect(tribonacci(n2)).toBe(expected);
  });

  it('should calculate the correct tribonacci number for n > 2', () => {
    const n = 4;
    const expected = 4;
    expect(tribonacci(n)).toBe(expected);
  });

  it('should calculate the correct tribonacci number for larger n', () => {
    const n = 25;
    const expected = 1389537;
    expect(tribonacci(n)).toBe(expected);
  });
});

/**
 * @link https://leetcode.com/problems/n-th-tribonacci-number/
 */
