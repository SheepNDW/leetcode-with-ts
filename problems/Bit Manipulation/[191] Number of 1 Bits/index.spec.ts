import { describe, expect, it } from 'vitest';
import { hammingWeight } from '.';

describe.skip('hammingWeight', () => {
  it('should return 3 for n = 00000000000000000000000000001011', () => {
    const n = 0b00000000000000000000000000001011;
    const result = hammingWeight(n);
    expect(result).toBe(3);
  });

  it('should return 1 for n = 00000000000000000000000010000000', () => {
    const n = 0b00000000000000000000000010000000;
    const result = hammingWeight(n);
    expect(result).toBe(1);
  });

  it('should return 31 for n = 11111111111111111111111111111101', () => {
    const n = 0b11111111111111111111111111111101;
    const result = hammingWeight(n);
    expect(result).toBe(31);
  });

  // 測試全為0的情況
  it('should return 0 for n = 00000000000000000000000000000000', () => {
    const n = 0b00000000000000000000000000000000;
    const result = hammingWeight(n);
    expect(result).toBe(0);
  });

  // 測試全為1的情況
  it('should return 32 for n = 11111111111111111111111111111111', () => {
    const n = 0b11111111111111111111111111111111;
    const result = hammingWeight(n);
    expect(result).toBe(32);
  });
});
