import { describe, expect, it } from 'vitest';
import { maxKelements } from '.';

describe.skip('maxKelements', () => {
  it('should return 50 for nums = [10,10,10,10,10], k = 5', () => {
    const nums = [10, 10, 10, 10, 10];
    const k = 5;

    const result = maxKelements(nums, k);

    expect(result).toBe(50);
  });

  it('should return 17 for nums = [1,10,3,3,3], k = 3', () => {
    const nums = [1, 10, 3, 3, 3];
    const k = 3;

    const result = maxKelements(nums, k);

    expect(result).toBe(17);
  });
});
