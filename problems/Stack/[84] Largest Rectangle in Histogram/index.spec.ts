import { describe, expect, it } from 'vitest';
import { largestRectangleArea } from '.';

describe.skip('largestRectangleArea', () => {
  it('should return 10 for heights = [2,1,5,6,2,3]', () => {
    const heights = [2, 1, 5, 6, 2, 3];
    const result = largestRectangleArea(heights);
    expect(result).toBe(10);
  });

  it('should return 4 for heights = [2,4]', () => {
    const heights = [2, 4];
    const result = largestRectangleArea(heights);
    expect(result).toBe(4);
  });
});
