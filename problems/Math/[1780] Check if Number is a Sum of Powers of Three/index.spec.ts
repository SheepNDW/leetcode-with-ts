import { describe, expect, it } from 'vitest';
import { checkPowersOfThree } from '.';

describe.skip('checkPowersOfThree', () => {
  it('should return true for n = 12', () => {
    const n = 12;
    const result = checkPowersOfThree(n);
    expect(result).toBe(true);
  });

  it('should return true for n = 91', () => {
    const n = 91;
    const result = checkPowersOfThree(n);
    expect(result).toBe(true);
  });

  it('should return false for n = 21', () => {
    const n = 21;
    const result = checkPowersOfThree(n);
    expect(result).toBe(false);
  });
});
