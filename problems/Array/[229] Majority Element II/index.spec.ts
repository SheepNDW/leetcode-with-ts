import { describe, expect, it } from 'vitest';
import { majorityElement } from '.';

describe('majorityElement', () => {
  it('should return [3] when input is [3,2,3]', () => {
    const result = majorityElement([3, 2, 3]);
    expect(result).toEqual([3]);
  });

  it('should return [1] when input is [1]', () => {
    const result = majorityElement([1]);
    expect(result).toEqual([1]);
  });

  it('should return [1,2] when input is [1,2]', () => {
    const result = majorityElement([1, 2]);
    expect(result).toEqual([1, 2]);
  });

  it('should return [4,2] when input is [4,4,4,2,2]', () => {
    const result = majorityElement([4, 4, 4, 2, 2]);
    expect(result).toEqual([4, 2]);
  });

  it('should handle negative numbers', () => {
    const result = majorityElement([-1, -1, 2]);
    expect(result).toEqual([-1]);
  });

  it('should handle maximum constraints', () => {
    const largeArray = Array(50000).fill(1000000000);
    const result = majorityElement(largeArray);
    expect(result).toEqual([1000000000]);
  });

  it('should handle minimum and maximum value', () => {
    const result = majorityElement([-1000000000, 1000000000]);
    expect(result).toEqual([-1000000000, 1000000000]);
  });
});
