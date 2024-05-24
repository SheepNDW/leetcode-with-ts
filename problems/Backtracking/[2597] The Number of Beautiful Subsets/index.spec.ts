import { describe, expect, it } from 'vitest';
import { beautifulSubsets } from '.';

describe.skip('beautifulSubsets', () => {
  it('should return 4 for nums=[2,4,6], k=2', () => {
    const nums = [2, 4, 6];
    const k = 2;

    const result = beautifulSubsets(nums, k);

    expect(result).toBe(4);
  });

  it('should return 1 for nums=[1], k=1', () => {
    const nums = [1];
    const k = 1;

    const result = beautifulSubsets(nums, k);

    expect(result).toBe(1);
  });
});
