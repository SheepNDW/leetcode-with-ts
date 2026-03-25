import { describe, expect, it } from 'vitest';
import { canPartitionGrid } from '.';

describe('canPartitionGrid', () => {
  it('example 1', () => {
    const grid = [
      [1, 4],
      [2, 3],
    ];
    const result = canPartitionGrid(grid);
    expect(result).toBe(true);
  });

  it('example 2', () => {
    const grid = [
      [1, 3],
      [2, 4],
    ];
    const result = canPartitionGrid(grid);
    expect(result).toBe(false);
  });

  it('example 3', () => {
    const grid = [[14742, 71685, 59237, 27190]];
    const result = canPartitionGrid(grid);
    expect(result).toBe(true);
  });
});
