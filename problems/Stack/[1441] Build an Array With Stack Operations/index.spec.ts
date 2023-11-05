import { describe, expect, it } from 'vitest';
import { buildArray } from '.';

describe('buildArray', () => {
  it('should return the correct operations for example 1', () => {
    const target = [1, 3];
    const n = 3;

    const result = buildArray(target, n);

    expect(result).toEqual(['Push', 'Push', 'Pop', 'Push']);
  });

  it('should return the correct operations for example 2', () => {
    const target = [1, 2, 3];
    const n = 3;

    const result = buildArray(target, n);

    expect(result).toEqual(['Push', 'Push', 'Push']);
  });

  it('should return the correct operations for example 3', () => {
    const target = [1, 2];
    const n = 4;

    const result = buildArray(target, n);

    expect(result).toEqual(['Push', 'Push']);
  });

  // Additional test cases...
  it('should handle the lower bound of the input range', () => {
    const target = [1];
    const n = 1;

    const result = buildArray(target, n);

    expect(result).toEqual(['Push']);
  });

  it('should handle the upper bound of the input range', () => {
    const target = Array.from({ length: 100 }, (_, i) => i + 1);
    const n = 100;

    const result = buildArray(target, n);

    expect(result).toEqual(Array(100).fill('Push'));
  });
});
