import { describe, expect, it } from 'vitest';
import { heightChecker } from '.';

describe.skip('heightChecker', () => {
  it('should return 3 for heights = [1,1,4,2,1,3]', () => {
    const heights = [1, 1, 4, 2, 1, 3];

    const result = heightChecker(heights);

    expect(result).toBe(3);
  });

  it('should return 5 for heights = [5,1,2,3,4]', () => {
    const heights = [5, 1, 2, 3, 4];

    const result = heightChecker(heights);

    expect(result).toBe(5);
  });

  it('should return 0 for heights = [1,2,3,4,5]', () => {
    const heights = [1, 2, 3, 4, 5];

    const result = heightChecker(heights);

    expect(result).toBe(0);
  });

  it('should return 22 for heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]', () => {
    const heights = [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7];

    const result = heightChecker(heights);

    expect(result).toBe(22);
  });
});
