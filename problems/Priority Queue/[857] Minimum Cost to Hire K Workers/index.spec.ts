import { describe, expect, it } from 'vitest';
import { mincostToHireWorkers } from '.';

describe.skip('mincostToHireWorkers', () => {
  it('should return 105 for quality = [10, 20, 5], wage = [70, 50, 30], k = 2', () => {
    const quality = [10, 20, 5];
    const wage = [70, 50, 30];
    const k = 2;

    const result = mincostToHireWorkers(quality, wage, k);

    expect(result).toBe(105);
  });

  it('should return 30.66667 for quality = [3, 1, 10, 10, 1], wage = [4, 8, 2, 2, 7], k = 3', () => {
    const quality = [3, 1, 10, 10, 1];
    const wage = [4, 8, 2, 2, 7];
    const k = 3;

    const result = mincostToHireWorkers(quality, wage, k);

    expect(result).toBeCloseTo(30.66667);
  });
});
