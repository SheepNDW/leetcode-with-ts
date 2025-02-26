import { describe, expect, it } from 'vitest';
import { numOfSubarrays } from '.';

describe.skip('numOfSubarrays', () => {
  it('should return 4 for arr = [1,3,5]', () => {
    const arr = [1, 3, 5];
    const result = numOfSubarrays(arr);
    expect(result).toBe(4);
  });

  it('should return 0 for arr = [2,4,6]', () => {
    const arr = [2, 4, 6];
    const result = numOfSubarrays(arr);
    expect(result).toBe(0);
  });

  it('should return 16 for arr = [1,2,3,4,5,6,7]', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = numOfSubarrays(arr);
    expect(result).toBe(16);
  });
});
