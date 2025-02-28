import { describe, expect, it } from 'vitest';
import { lenLongestFibSubseq } from '.';

describe.skip('lenLongestFibSubseq', () => {
  it('should return 5 for arr = [1,2,3,4,5,6,7,8]', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = lenLongestFibSubseq(arr);
    expect(result).toBe(5);
  });

  it('should return 3 for arr = [1,3,7,11,12,14,18]', () => {
    const arr = [1, 3, 7, 11, 12, 14, 18];
    const result = lenLongestFibSubseq(arr);
    expect(result).toBe(3);
  });
});
