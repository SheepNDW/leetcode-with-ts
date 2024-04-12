import { describe, expect, it } from 'vitest';
import { removeKdigits } from '.';

describe.skip('removeKdigits', () => {
  it('should return "1219" for num = "1432219", k = 3', () => {
    const num = '1432219';
    const k = 3;
    const expected = '1219';
    const result = removeKdigits(num, k);
    expect(result).toBe(expected);
  });

  it('should return "200" for num = "10200", k = 1', () => {
    const num = '10200';
    const k = 1;
    const expected = '200';
    const result = removeKdigits(num, k);
    expect(result).toBe(expected);
  });

  it('should return "0" for num = "10", k = 2', () => {
    const num = '10';
    const k = 2;
    const expected = '0';
    const result = removeKdigits(num, k);
    expect(result).toBe(expected);
  });

  it('should return "0" for num = "100", k = 1', () => {
    const num = '100';
    const k = 1;
    const expected = '0';
    // After removing one digit, the result should not have leading zeros.
    const result = removeKdigits(num, k);
    expect(result).toBe(expected);
  });

  it('should return "123" for num = "12345", k = 2', () => {
    const num = '12345';
    const k = 2;
    const expected = '123';
    const result = removeKdigits(num, k);
    expect(result).toBe(expected);
  });
});
