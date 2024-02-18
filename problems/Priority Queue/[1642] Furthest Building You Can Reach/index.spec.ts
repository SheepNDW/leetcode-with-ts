import { describe, expect, it } from 'vitest';
import { furthestBuilding } from '.';

describe.skip('furthestBuilding', () => {
  it('should return 4 for heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1', () => {
    const heights = [4, 2, 7, 6, 9, 14, 12];
    const bricks = 5;
    const ladders = 1;

    const result = furthestBuilding(heights, bricks, ladders);

    expect(result).toBe(4);
  });

  it('should return 7 for heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2', () => {
    const heights = [4, 12, 2, 7, 3, 18, 20, 3, 19];
    const bricks = 10;
    const ladders = 2;

    const result = furthestBuilding(heights, bricks, ladders);

    expect(result).toBe(7);
  });

  it('should return 3 for heights = [14,3,19,3], bricks = 17, ladders = 0', () => {
    const heights = [14, 3, 19, 3];
    const bricks = 17;
    const ladders = 0;

    const result = furthestBuilding(heights, bricks, ladders);

    expect(result).toBe(3);
  });
});
