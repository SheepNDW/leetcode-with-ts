import { describe, expect, it } from 'vitest';
import { maximumSum } from '.';

describe.skip('maximumSum', () => {
  it('should return 54 for nums = [18,43,36,13,7]', () => {
    const nums = [18, 43, 36, 13, 7];

    const result = maximumSum(nums);

    expect(result).toBe(54);
  });

  it('should return -1 for nums = [10,12,19,14]', () => {
    const nums = [10, 12, 19, 14];

    const result = maximumSum(nums);

    expect(result).toBe(-1);
  });
});
