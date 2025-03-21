import { describe, expect, it } from 'vitest';
import { minOperations } from '.';

describe.skip('minOperations', () => {
  it('should return 3 for [0,1,1,1,0,0]', () => {
    const nums = [0, 1, 1, 1, 0, 0];

    const result = minOperations(nums);

    expect(result).toBe(3);
  });

  it('should return -1 for [0,1,1,1]', () => {
    const nums = [0, 1, 1, 1];

    const result = minOperations(nums);

    expect(result).toBe(-1);
  });
});
