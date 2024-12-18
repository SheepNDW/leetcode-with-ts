import { describe, expect, it } from 'vitest';
import { findKthBit } from '.';

describe.skip('findKthBit', () => {
  it('should return "0" for n = 3, k = 1', () => {
    const n = 3;
    const k = 1;

    const result = findKthBit(n, k);

    expect(result).toBe('0');
  });

  it('should return "1" for n = 4, k = 11', () => {
    const n = 4;
    const k = 11;

    const result = findKthBit(n, k);

    expect(result).toBe('1');
  });
});
