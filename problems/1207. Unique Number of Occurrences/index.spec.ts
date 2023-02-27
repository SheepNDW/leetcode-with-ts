import { describe, it, expect } from 'vitest';
import { uniqueOccurrences } from '.';

describe('uniqueOccurrences()', () => {
  it('should return true', () => {
    const arr = [1, 2, 2, 1, 1, 3];
    expect(uniqueOccurrences(arr)).toBeTruthy();
  });

  it('should return false', () => {
    const arr = [1, 2];
    expect(uniqueOccurrences(arr)).toBeFalsy();
  });

  it('should handle negative and positive numbers', () => {
    const arr = [-1, 2, -2, 1, 1, 3];
    expect(uniqueOccurrences(arr)).toBeFalsy();
  });

  it('should return true for arrays with unique occurrences of values', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    expect(uniqueOccurrences(arr)).toBeTruthy();
  });

  it('should handle arrays with all duplicates', () => {
    const arr = [1, 1, 1, 1, 1];
    expect(uniqueOccurrences(arr)).toBeTruthy();
  });

  it('should handle arrays with a single value', () => {
    const arr = [5];
    expect(uniqueOccurrences(arr)).toBeTruthy();
  });
});

/**
 * @link https://leetcode.com/problems/unique-number-of-occurrences/
 */
