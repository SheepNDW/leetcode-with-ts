import { describe, expect, it } from 'vitest';
import { minDifference } from '.';

describe.skip('minDifference', () => {
  it('should return 0 for nums = [5,3,2,4]', () => {
    const nums = [5, 3, 2, 4];

    const result = minDifference(nums);

    expect(result).toBe(0);
  });

  it('should return 1 for nums = [1,5,0,10,14]', () => {
    const nums = [1, 5, 0, 10, 14];

    const result = minDifference(nums);

    expect(result).toBe(1);
  });

  it('should return 0 for nums = [3,100,20]', () => {
    const nums = [3, 100, 20];

    const result = minDifference(nums);

    expect(result).toBe(0);
  });

  it('should return 0 for nums = [100]', () => {
    const nums = [100];

    const result = minDifference(nums);

    expect(result).toBe(0);
  });

  it('should return 2 for nums = [6,6,0,1,1,4,6]', () => {
    const nums = [6, 6, 0, 1, 1, 4, 6];

    const result = minDifference(nums);

    expect(result).toBe(2);
  });

  it('should return 17 for nums = [9,48,92,48,81,31]', () => {
    const nums = [9, 48, 92, 48, 81, 31];

    const result = minDifference(nums);

    expect(result).toBe(17);
  });
});
