import { describe, expect, it } from 'vitest';
import { imageSmoother } from '.';

describe.skip('imageSmoother', () => {
  it('should smooth a 3x3 matrix correctly', () => {
    const img = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    expect(imageSmoother(img)).toEqual(expected);
  });

  it('should smooth a 3x3 matrix with varying values correctly', () => {
    const img = [
      [100, 200, 100],
      [200, 50, 200],
      [100, 200, 100],
    ];
    const expected = [
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ];

    expect(imageSmoother(img)).toEqual(expected);
  });

  it('should handle a single element matrix', () => {
    const img = [[100]];
    const expected = [[100]];

    expect(imageSmoother(img)).toEqual(expected);
  });
});
