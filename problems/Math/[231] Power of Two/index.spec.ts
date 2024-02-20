import { describe, expect, it } from 'vitest';
import { isPowerOfTwo } from '.';

describe.skip('isPowerOfTwo', () => {
  it('should return true for n = 1', () => {
    const n = 1;
    const result = isPowerOfTwo(n);
    expect(result).toBe(true);
  });

  it('should return true for n = 16', () => {
    const n = 16;
    const result = isPowerOfTwo(n);
    expect(result).toBe(true);
  });

  it('should return false for n = 3', () => {
    const n = 3;
    const result = isPowerOfTwo(n);
    expect(result).toBe(false);
  });

  // Optional: Adding more test cases to ensure reliability
  it('should return false for n = 0', () => {
    const n = 0;
    const result = isPowerOfTwo(n);
    expect(result).toBe(false);
  });

  it('should return false for n = -2', () => {
    const n = -2;
    const result = isPowerOfTwo(n);
    expect(result).toBe(false);
  });

  it('should return true for n = 512', () => {
    const n = 512;
    const result = isPowerOfTwo(n);
    expect(result).toBe(true);
  });
});
