import { describe, expect, it } from 'vitest';
import { smallestDistancePair } from '.';

describe.skip('smallestDistancePair', () => {
  it('should return 0 for nums = [1,3,1], k = 1', () => {
    const nums = [1, 3, 1];
    const k = 1;

    const result = smallestDistancePair(nums, k);

    expect(result).toBe(0);
  });

  it('should return 0 for nums = [1,1,1], k = 2', () => {
    const nums = [1, 1, 1];
    const k = 2;

    const result = smallestDistancePair(nums, k);

    expect(result).toBe(0);
  });

  it('should return 5 for nums = [1,6,1], k = 3', () => {
    const nums = [1, 6, 1];
    const k = 3;

    const result = smallestDistancePair(nums, k);

    expect(result).toBe(5);
  });
});
