import { describe, expect, it } from 'vitest';
import { search } from '.';

describe('search II', () => {
  it('should return true when target is found', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2];
    const target = 0;

    const result = search(nums, target);

    expect(result).toBe(true);
  });

  it('should return false when target is not found', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2];
    const target = 3;

    const result = search(nums, target);

    expect(result).toBe(false);
  });

  it('should handle duplicates', () => {
    const nums = [1, 1, 1, 2, 1];
    const target = 2;

    const result = search(nums, target);

    expect(result).toBe(true);
  });
});
