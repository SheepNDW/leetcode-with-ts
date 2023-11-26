import { describe, expect, it } from 'vitest';
import { largestSubmatrix } from '.';

describe.skip('largestSubmatrix', () => {
  it('should return the largest area of a submatrix of 1s (Example 1)', () => {
    const matrix = [
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 1],
    ];
    const expected = 4;

    const result = largestSubmatrix(matrix);

    expect(result).toBe(expected);
  });

  it('should return the largest area of a submatrix of 1s (Example 2)', () => {
    const matrix = [[1, 0, 1, 0, 1]];
    const expected = 3;

    const result = largestSubmatrix(matrix);

    expect(result).toBe(expected);
  });

  it('should return the largest area of a submatrix of 1s (Example 3)', () => {
    const matrix = [
      [1, 1, 0],
      [1, 0, 1],
    ];
    const expected = 2;

    const result = largestSubmatrix(matrix);

    expect(result).toBe(expected);
  });

  it('should return 0 for a matrix with all 0s', () => {
    const matrix = [
      [0, 0],
      [0, 0],
    ];
    const expected = 0;

    const result = largestSubmatrix(matrix);

    expect(result).toBe(expected);
  });

  it('should return the total area for a matrix with all 1s', () => {
    const matrix = [
      [1, 1],
      [1, 1],
    ];
    const expected = 4;

    const result = largestSubmatrix(matrix);

    expect(result).toBe(expected);
  });
});
