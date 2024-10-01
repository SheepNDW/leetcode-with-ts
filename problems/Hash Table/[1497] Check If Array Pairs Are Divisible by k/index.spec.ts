import { describe, expect, it } from 'vitest';
import { canArrange } from '.';

describe.skip('canArrange', () => {
  it('should return true for [1, 2, 3, 4, 5, 10, 6, 7, 8, 9] and k = 5', () => {
    const arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9];
    const k = 5;

    const result = canArrange(arr, k);

    expect(result).toBe(true);
  });

  it('should return true for [1, 2, 3, 4, 5, 6] and k = 7', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const k = 7;

    const result = canArrange(arr, k);

    expect(result).toBe(true);
  });

  it('should return false for [1, 2, 3, 4, 5, 6] and k = 10', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const k = 10;

    const result = canArrange(arr, k);

    expect(result).toBe(false);
  });
});
