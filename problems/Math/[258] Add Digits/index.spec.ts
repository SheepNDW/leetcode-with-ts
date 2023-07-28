import { describe, expect, it } from 'vitest';
import { addDigits } from '.';

describe('addDigits', () => {
  it('should return 2', () => {
    expect(addDigits(38)).toBe(2);
  });

  it('should return 0', () => {
    expect(addDigits(0)).toBe(0);
  });

  it('should return 9', () => {
    expect(addDigits(9)).toBe(9);
  });

  it('should return 1', () => {
    expect(addDigits(10)).toBe(1);
  });
});
