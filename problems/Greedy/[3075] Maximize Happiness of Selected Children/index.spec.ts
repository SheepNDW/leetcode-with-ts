import { describe, expect, it } from 'vitest';
import { maximumHappinessSum } from '.';

describe.skip('maximumHappinessSum', () => {
  it('should return 4 for happiness = [1,2,3], k = 2', () => {
    const happiness = [1, 2, 3];
    const k = 2;

    const result = maximumHappinessSum(happiness, k);

    expect(result).toBe(4);
  });

  it('should return 1 for happiness = [1,1,1,1], k = 2', () => {
    const happiness = [1, 1, 1, 1];
    const k = 2;

    const result = maximumHappinessSum(happiness, k);

    expect(result).toBe(1);
  });

  it('should return 5 for happiness = [2,3,4,5], k = 1', () => {
    const happiness = [2, 3, 4, 5];
    const k = 1;

    const result = maximumHappinessSum(happiness, k);

    expect(result).toBe(5);
  });
});
