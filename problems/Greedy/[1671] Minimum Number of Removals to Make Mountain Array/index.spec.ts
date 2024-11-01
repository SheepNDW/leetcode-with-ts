import { describe, expect, it } from 'vitest';
import { minimumMountainRemovals } from '.';

describe('minimumMountainRemovals', () => {
  it('should return 0 for nums = [1,3,1]', () => {
    const nums = [1, 3, 1];

    const result = minimumMountainRemovals(nums);

    expect(result).toBe(0);
  });

  it('should return 3 for nums = [2,1,1,5,6,2,3,1]', () => {
    const nums = [2, 1, 1, 5, 6, 2, 3, 1];

    const result = minimumMountainRemovals(nums);

    expect(result).toBe(3);
  });
});
