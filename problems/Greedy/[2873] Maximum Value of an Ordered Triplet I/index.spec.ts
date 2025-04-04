import { describe, expect, it } from 'vitest';
import { maximumTripletValue } from '.';

describe.skip('maximumTripletValue', () => {
  it('should return 77 for nums = [12,6,1,2,7]', () => {
    const nums = [12, 6, 1, 2, 7];
    const result = maximumTripletValue(nums);
    expect(result).toBe(77);
  });

  it('should return 133 for nums = [1,10,3,4,19]', () => {
    const nums = [1, 10, 3, 4, 19];
    const result = maximumTripletValue(nums);
    expect(result).toBe(133);
  });

  it('should return 0 for nums = [1,2,3]', () => {
    const nums = [1, 2, 3];
    const result = maximumTripletValue(nums);
    expect(result).toBe(0);
  });
});
