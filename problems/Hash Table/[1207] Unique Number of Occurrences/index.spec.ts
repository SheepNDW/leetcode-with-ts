import { describe, it, expect } from 'vitest';
import { uniqueOccurrences } from '.';

describe('uniqueOccurrences', () => {
  it('should return true when arr = [1, 2, 2, 1, 1, 3]', () => {
    const arr = [1, 2, 2, 1, 1, 3];

    const result = uniqueOccurrences(arr);

    expect(result).toBe(true);
  });

  it('should return false when arr = [1, 2]', () => {
    const arr = [1, 2];

    const result = uniqueOccurrences(arr);

    expect(result).toBe(false);
  });

  it('should handle negative and positive numbers with arr = [-1, 2, -2, 1, 1, 3]', () => {
    const arr = [-1, 2, -2, 1, 1, 3];

    const result = uniqueOccurrences(arr);

    expect(result).toBe(false);
  });

  it('should return true for arrays with unique occurrences of values with arr = [1, 2, 2, 3, 3, 3]', () => {
    const arr = [1, 2, 2, 3, 3, 3];

    const result = uniqueOccurrences(arr);

    expect(result).toBe(true);
  });

  it('should handle arrays with all duplicates with arr = [1, 1, 1, 1, 1]', () => {
    const arr = [1, 1, 1, 1, 1];

    const result = uniqueOccurrences(arr);

    expect(result).toBe(true);
  });

  it('should handle arrays with a single value with arr = [5]', () => {
    const arr = [5];

    const result = uniqueOccurrences(arr);

    expect(result).toBe(true);
  });
});

/**
 * @link https://leetcode.com/problems/unique-number-of-occurrences/
 */
