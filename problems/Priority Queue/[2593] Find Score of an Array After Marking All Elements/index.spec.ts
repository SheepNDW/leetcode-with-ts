import { describe, expect, it } from 'vitest';
import { findScore } from '.';

describe.skip('findScore', () => {
  it('should return 7', () => {
    const nums = [2, 1, 3, 4, 5, 2];

    const result = findScore(nums);

    expect(result).toEqual(7);
  });

  it('should return 5', () => {
    const nums = [2, 3, 5, 1, 3, 2];

    const result = findScore(nums);

    expect(result).toEqual(5);
  });

  it('should return 3', () => {
    const nums = [5, 1, 1, 7, 2, 4];

    const result = findScore(nums);

    expect(result).toEqual(3);
  });
});
