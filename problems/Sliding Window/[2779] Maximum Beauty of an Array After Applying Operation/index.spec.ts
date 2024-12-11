import { describe, expect, it } from 'vitest';
import { maximumBeauty } from '.';

describe.skip('maximumBeauty', () => {
  it('should return 3', () => {
    const nums = [4, 6, 1, 2];
    const k = 2;

    const result = maximumBeauty(nums, k);

    expect(result).toBe(3);
  });

  it('should return 4', () => {
    const nums = [1, 1, 1, 1];
    const k = 10;

    const result = maximumBeauty(nums, k);

    expect(result).toBe(4);
  });
});
