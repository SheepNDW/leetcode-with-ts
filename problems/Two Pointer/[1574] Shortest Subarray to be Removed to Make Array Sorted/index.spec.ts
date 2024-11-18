import { describe, expect, it } from 'vitest';
import { findLengthOfShortestSubarray } from '.';

describe.skip('findLengthOfShortestSubarray', () => {
  it('should return 3', () => {
    const arr = [1, 2, 3, 10, 4, 2, 3, 5];
    const result = findLengthOfShortestSubarray(arr);
    expect(result).toBe(3);
  });

  it('should return 4', () => {
    const arr = [5, 4, 3, 2, 1];
    const result = findLengthOfShortestSubarray(arr);
    expect(result).toBe(4);
  });

  it('should return 0', () => {
    const arr = [1, 2, 3];
    const result = findLengthOfShortestSubarray(arr);
    expect(result).toBe(0);
  });
});
