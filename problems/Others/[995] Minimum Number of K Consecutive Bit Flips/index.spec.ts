import { describe, expect, it } from 'vitest';
import { minKBitFlips } from '.';

describe.skip('minKBitFlips', () => {
  it('should return 2 for nums = [0,1,0], k = 1', () => {
    const nums = [0, 1, 0];
    const k = 1;

    const result = minKBitFlips(nums, k);

    expect(result).toBe(2);
  });

  it('should return -1 for nums = [1,1,0], k = 2', () => {
    const nums = [1, 1, 0];
    const k = 2;

    const result = minKBitFlips(nums, k);

    expect(result).toBe(-1);
  });

  it('should return 3 for nums = [0,0,0,1,0,1,1,0], k = 3', () => {
    const nums = [0, 0, 0, 1, 0, 1, 1, 0];
    const k = 3;

    const result = minKBitFlips(nums, k);

    expect(result).toBe(3);
  });
});
