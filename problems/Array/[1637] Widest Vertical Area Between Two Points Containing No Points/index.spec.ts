import { describe, expect, it } from 'vitest';
import { maxWidthOfVerticalArea } from '.';

describe.skip('maxWidthOfVerticalArea', () => {
  it('should return the maximum width of the vertical area - Example 1', () => {
    const points = [
      [8, 7],
      [9, 9],
      [7, 4],
      [9, 7],
    ];
    const expected = 1;
    expect(maxWidthOfVerticalArea(points)).toBe(expected);
  });

  it('should return the maximum width of the vertical area - Example 2', () => {
    const points = [
      [3, 1],
      [9, 0],
      [1, 0],
      [1, 4],
      [5, 3],
      [8, 8],
    ];
    const expected = 3;
    expect(maxWidthOfVerticalArea(points)).toBe(expected);
  });

  it('should handle cases with multiple widest vertical areas', () => {
    const points = [
      [2, 3],
      [4, 1],
      [6, 4],
      [8, 1],
      [10, 2],
    ];
    const expected = 2;
    expect(maxWidthOfVerticalArea(points)).toBe(expected);
  });

  it('should return 0 when all points have the same x coordinate', () => {
    const points = [
      [5, 0],
      [5, 5],
      [5, 10],
    ];
    const expected = 0;
    expect(maxWidthOfVerticalArea(points)).toBe(expected);
  });
});
