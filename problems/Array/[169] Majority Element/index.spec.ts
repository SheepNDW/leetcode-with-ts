import { describe, expect, it } from 'vitest';
import { majorityElement } from '.';

describe.skip('majorityElement', () => {
  it('should return 3 for input [3,2,3]', () => {
    const nums = [3, 2, 3];

    const result = majorityElement(nums);

    expect(result).toBe(3);
  });

  it('should return 2 for input [2,2,1,1,1,2,2]', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];

    const result = majorityElement(nums);

    expect(result).toBe(2);
  });
});
