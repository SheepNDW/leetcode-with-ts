import { describe, expect, it } from 'vitest';
import { minDifficulty } from '.';

describe.skip('minDifficulty', () => {
  it('should return 7 for jobDifficulty = [6,5,4,3,2,1] and d = 2', () => {
    const jobDifficulty = [6, 5, 4, 3, 2, 1];
    const d = 2;

    const result = minDifficulty(jobDifficulty, d);

    expect(result).toBe(7);
  });

  it('should return -1 for jobDifficulty = [9,9,9] and d = 4', () => {
    const jobDifficulty = [9, 9, 9];
    const d = 4;

    const result = minDifficulty(jobDifficulty, d);

    expect(result).toBe(-1);
  });

  it('should return 3 for jobDifficulty = [1,1,1] and d = 3', () => {
    const jobDifficulty = [1, 1, 1];
    const d = 3;

    const result = minDifficulty(jobDifficulty, d);

    expect(result).toBe(3);
  });
});
