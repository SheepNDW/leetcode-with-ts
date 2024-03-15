import { describe, expect, it } from 'vitest';
import { numSubarraysWithSum } from '.';

describe.skip('numSubarraysWithSum', () => {
  it('should return 4 for nums = [1,0,1,0,1] and goal = 2', () => {
    const nums = [1, 0, 1, 0, 1];
    const goal = 2;

    const result = numSubarraysWithSum(nums, goal);

    expect(result).toBe(4);
  });

  it('should return 15 for nums = [0,0,0,0,0] and goal = 0', () => {
    const nums = [0, 0, 0, 0, 0];
    const goal = 0;

    const result = numSubarraysWithSum(nums, goal);

    expect(result).toBe(15);
  });
});
