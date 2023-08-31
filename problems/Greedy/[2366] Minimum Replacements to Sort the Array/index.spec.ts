import { describe, expect, it } from 'vitest';
import { minimumReplacement } from '.';

describe('minimumReplacement', () => {
  it('should return 2 when input is [3, 9, 3]', () => {
    const input = [3, 9, 3];
    const expected = 2;

    const result = minimumReplacement(input);

    expect(result).toBe(expected);
  });

  it('should return 0 when array is already sorted as [1, 2, 3, 4, 5]', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = 0;
    const result = minimumReplacement(input);
    expect(result).toBe(expected);
  });

  it('should return 4 when array is sorted in decreasing order as [5, 4, 3, 2, 1]', () => {
    const input = [5, 4, 3, 2, 1];
    const expected = 10;
    const result = minimumReplacement(input);
    expect(result).toBe(expected);
  });

  it('should return 0 when array contains a single element', () => {
    const input = [1];
    const expected = 0;
    const result = minimumReplacement(input);
    expect(result).toBe(expected);
  });

  it('should return 0 when all array elements are identical', () => {
    const input = [2, 2, 2, 2];
    const expected = 0;
    const result = minimumReplacement(input);
    expect(result).toBe(expected);
  });
});
