import { describe, expect, it } from 'vitest';
import { maxChunksToSorted } from '.';

describe.skip('maxChunksToSorted', () => {
  it('should return 1 for arr = [4,3,2,1,0]', () => {
    const arr = [4, 3, 2, 1, 0];
    const result = maxChunksToSorted(arr);
    expect(result).toBe(1);
  });

  it('should return 4 for arr = [1,0,2,3,4]', () => {
    const arr = [1, 0, 2, 3, 4];
    const result = maxChunksToSorted(arr);
    expect(result).toBe(4);
  });
});
