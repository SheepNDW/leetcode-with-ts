import { describe, expect, it } from 'vitest';
import { missingRolls } from '.';

describe.skip('missingRolls', () => {
  it('should return [6, 6] for rolls = [3, 2, 4, 3], mean = 4, n = 2', () => {
    const rolls = [3, 2, 4, 3];
    const mean = 4;
    const n = 2;

    const result = missingRolls(rolls, mean, n);

    expect(result).toEqual([6, 6]);
  });

  it('should return valid answer for rolls = [1, 5, 6], mean = 3, n = 4', () => {
    const rolls = [1, 5, 6];
    const mean = 3;
    const n = 4;

    const result = missingRolls(rolls, mean, n);
    const total = rolls.concat(result).reduce((a, c) => a + c, 0);

    expect(result.length).toBe(n);
    expect(total).toBe((rolls.length + n) * mean);
  });

  it('should return [] for rolls = [1, 2, 3, 4], mean = 6, n = 4', () => {
    const rolls = [1, 2, 3, 4];
    const mean = 6;
    const n = 4;

    const result = missingRolls(rolls, mean, n);

    expect(result).toEqual([]);
  });
});
