import { describe, expect, it } from 'vitest';
import { generate } from '.';

describe(`generate pascal's triangle`, () => {
  it('should return a triangle with 1 row when numRows is 1', () => {
    const numRows = 1;

    const result = generate(numRows);

    expect(result).toEqual([[1]]);
  });

  it('should return a triangle with 5 rows when numRows is 5', () => {
    const numRows = 5;

    const result = generate(numRows);

    expect(result).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });

  it('should handle the upper constraint of numRows being 30', () => {
    const numRows = 30;

    const result = generate(numRows);

    // Here you may only want to check the length and the first and last row for validation
    expect(result.length).toBe(30);
    expect(result[0]).toEqual([1]);
    expect(result[29][0]).toBe(1);
    expect(result[29][29]).toBe(1);
  });
});
