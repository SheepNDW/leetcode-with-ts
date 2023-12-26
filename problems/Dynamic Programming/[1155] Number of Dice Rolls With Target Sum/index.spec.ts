import { describe, expect, it } from 'vitest';
import { numRollsToTarget } from '.';

describe.skip('numRollsToTarget', () => {
  it('should return 1 for n = 1, k = 6, target = 3', () => {
    const n = 1;
    const k = 6;
    const target = 3;

    const result = numRollsToTarget(n, k, target);

    expect(result).toBe(1);
  });

  it('should return 6 for n = 2, k = 6, target = 7', () => {
    const n = 2;
    const k = 6;
    const target = 7;

    const result = numRollsToTarget(n, k, target);

    expect(result).toBe(6);
  });

  it('should return 222616187 for n = 30, k = 30, target = 500', () => {
    const n = 30;
    const k = 30;
    const target = 500;

    const result = numRollsToTarget(n, k, target);

    expect(result).toBe(222616187);
  });
});
