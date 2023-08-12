import { describe, expect, it } from 'vitest';
import { uniquePathsWithObstacles } from '.';

describe('uniquePathsWithObstacles', () => {
  it('should return 2', () => {
    const obstacleGrid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    const result = uniquePathsWithObstacles(obstacleGrid);

    expect(result).toBe(2);
  });

  it('should return 1', () => {
    const obstacleGrid = [
      [0, 1],
      [0, 0],
    ];

    const result = uniquePathsWithObstacles(obstacleGrid);

    expect(result).toBe(1);
  });
});
