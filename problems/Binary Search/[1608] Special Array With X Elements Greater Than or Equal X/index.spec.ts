import { describe, expect, it } from 'vitest';
import { specialArray } from '.';

describe.skip('specialArray', () => {
  it('should return 2 for nums = [3,5]', () => {
    const nums = [3, 5];

    const result = specialArray(nums);

    expect(result).toBe(2);
  });

  it('should return -1 for nums = [0,0]', () => {
    const nums = [0, 0];

    const result = specialArray(nums);

    expect(result).toBe(-1);
  });
});
