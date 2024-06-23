import { describe, expect, it } from 'vitest';
import { maxSatisfied } from '.';

describe.skip('maxSatisfied', () => {
  it('should return 16 for customers = [1,0,1,2,1,1,7,5] grumpy = [0,1,0,1,0,1,0,1] minutes = 3', () => {
    const customers = [1, 0, 1, 2, 1, 1, 7, 5];
    const grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
    const minutes = 3;

    const result = maxSatisfied(customers, grumpy, minutes);

    expect(result).toBe(16);
  });

  it('should return 1 for customers = [1] grumpy = [0] minutes = 1', () => {
    const customers = [1];
    const grumpy = [0];
    const minutes = 1;

    const result = maxSatisfied(customers, grumpy, minutes);

    expect(result).toBe(1);
  });
});
