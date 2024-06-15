import { describe, expect, it } from 'vitest';
import { minIncrementForUnique } from '.';

describe.skip('minIncrementForUnique', () => {
  it('should return 1 for nums = [1,2,2]', () => {
    const nums = [1, 2, 2];

    const result = minIncrementForUnique(nums);

    expect(result).toBe(1);
  });

  it('should return 6 for nums = [3,2,1,2,1,7]', () => {
    const nums = [3, 2, 1, 2, 1, 7];

    const result = minIncrementForUnique(nums);

    expect(result).toBe(6);
  });
});
