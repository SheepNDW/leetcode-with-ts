import { describe, expect, it } from 'vitest';
import { maximalRectangle } from '.';

describe.skip('maximalRectangle', () => {
  it('should return 6 for the matrix with mixed zeros and ones', () => {
    const matrix = [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ];
    const expected = 6;
    const result = maximalRectangle(matrix);
    expect(result).toBe(expected);
  });

  it('should return 0 for the matrix with a single zero', () => {
    const matrix = [['0']];
    const expected = 0;
    const result = maximalRectangle(matrix);
    expect(result).toBe(expected);
  });

  it('should return 1 for the matrix with a single one', () => {
    const matrix = [['1']];
    const expected = 1;
    const result = maximalRectangle(matrix);
    expect(result).toBe(expected);
  });

  it('should return 2 for matrix = [["1","0"],["1","0"]]', () => {
    const matrix = [
      ['1', '0'],
      ['1', '0'],
    ];
    const expected = 2;
    const result = maximalRectangle(matrix);
    expect(result).toBe(expected);
  });
});
