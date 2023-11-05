import { describe, expect, it } from 'vitest';
import { getLastMoment } from '.';

describe.skip('getLastMoment', () => {
  it('should return the correct time for the last ant to fall off (Example 1)', () => {
    const n = 4;
    const left = [4, 3];
    const right = [0, 1];
    const result = getLastMoment(n, left, right);
    expect(result).toEqual(4);
  });

  it('should return the correct time for the last ant to fall off (Example 2)', () => {
    const n = 7;
    const left: number[] = [];
    const right = [0, 1, 2, 3, 4, 5, 6, 7];
    const result = getLastMoment(n, left, right);
    expect(result).toEqual(7);
  });

  it('should return the correct time for the last ant to fall off (Example 3)', () => {
    const n = 7;
    const left = [0, 1, 2, 3, 4, 5, 6, 7];
    const right: number[] = [];
    const result = getLastMoment(n, left, right);
    expect(result).toEqual(7);
  });

  // Additional test cases...
  it('should handle the lower bound of the input range', () => {
    const n = 1;
    const left = [0];
    const right: number[] = [];
    const result = getLastMoment(n, left, right);
    expect(result).toEqual(0);
  });

  it('should handle the upper bound of the input range', () => {
    const n = 10000;
    const left = Array.from({ length: 5000 }, (_, i) => i);
    const right = Array.from({ length: 5000 }, (_, i) => 5000 + i);
    const result = getLastMoment(n, left, right);
    expect(result).toEqual(5000);
  });
});
