import { describe, expect, it } from 'vitest';
import { largestPerimeter } from '.';

describe.skip('largestPerimeter', () => {
  it('should return 15 for nums = [5,5,5]', () => {
    const nums = [5, 5, 5];

    const result = largestPerimeter(nums);

    expect(result).toBe(15);
  });

  it('should return 12 for nums = [1,12,1,2,5,50,3]', () => {
    const nums = [1, 12, 1, 2, 5, 50, 3];

    const result = largestPerimeter(nums);

    expect(result).toBe(12);
  });

  it('should return -1 for nums = [5,5,50]', () => {
    const nums = [5, 5, 50];

    const result = largestPerimeter(nums);

    expect(result).toBe(-1);
  });
});
