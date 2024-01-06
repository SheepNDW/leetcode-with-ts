import { describe, expect, it } from 'vitest';
import { jobScheduling } from '.';

describe.skip('jobScheduling', () => {
  it('should return 120 as maximum profit for non-overlapping jobs [1,2,3,3] to [3,4,5,6] with profits [50,10,40,70]', () => {
    const startTime = [1, 2, 3, 3];
    const endTime = [3, 4, 5, 6];
    const profit = [50, 10, 40, 70];

    const result = jobScheduling(startTime, endTime, profit);

    expect(result).toBe(120);
  });

  it('should return 150 as maximum profit for non-overlapping jobs [1,2,3,4,6] to [3,5,10,6,9] with profits [20,20,100,70,60]', () => {
    const startTime = [1, 2, 3, 4, 6];
    const endTime = [3, 5, 10, 6, 9];
    const profit = [20, 20, 100, 70, 60];

    const result = jobScheduling(startTime, endTime, profit);

    expect(result).toBe(150);
  });

  it('should return 6 as maximum profit for non-overlapping jobs [1,1,1] to [2,3,4] with profits [5,6,4]', () => {
    const startTime = [1, 1, 1];
    const endTime = [2, 3, 4];
    const profit = [5, 6, 4];

    const result = jobScheduling(startTime, endTime, profit);

    expect(result).toBe(6);
  });
});
