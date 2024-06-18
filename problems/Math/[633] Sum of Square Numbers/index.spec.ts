import { describe, expect, it } from 'vitest';
import { judgeSquareSum } from '.';

describe.skip('judgeSquareSum', () => {
  it('should return true for c = 5', () => {
    const c = 5;
    const result = judgeSquareSum(c);
    expect(result).toBe(true);
  });

  it('should return false for c = 3', () => {
    const c = 3;
    const result = judgeSquareSum(c);
    expect(result).toBe(false);
  });

  it('should return true for c = 4', () => {
    const c = 4;
    const result = judgeSquareSum(c);
    expect(result).toBe(true);
  });

  it('should return false for c = 2147483646', () => {
    const c = 2147483646;
    const result = judgeSquareSum(c);
    expect(result).toBe(false);
  });
});
