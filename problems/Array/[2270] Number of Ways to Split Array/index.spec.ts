import { describe, expect, it } from 'vitest';
import { waysToSplitArray } from '.';

describe.skip('waysToSplitArray', () => {
  it('should return 2 for nums = [10,4,-8,7]', () => {
    const nums = [10, 4, -8, 7];

    const result = waysToSplitArray(nums);

    expect(result).toBe(2);
  });

  it('should return 2 for nums = [2,3,1,0]', () => {
    const nums = [2, 3, 1, 0];

    const result = waysToSplitArray(nums);

    expect(result).toBe(2);
  });
});
