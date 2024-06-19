import { describe, expect, it } from 'vitest';
import { maxProfitAssignment } from '.';

describe.skip('maxProfitAssignment', () => {
  it('should return 100', () => {
    const difficulty = [2, 4, 6, 8, 10];
    const profit = [10, 20, 30, 40, 50];
    const worker = [4, 5, 6, 7];

    const result = maxProfitAssignment(difficulty, profit, worker);

    expect(result).toBe(100);
  });

  it('should return 0', () => {
    const difficulty = [85, 47, 57];
    const profit = [24, 66, 99];
    const worker = [40, 25, 25];

    const result = maxProfitAssignment(difficulty, profit, worker);

    expect(result).toBe(0);
  });
});
