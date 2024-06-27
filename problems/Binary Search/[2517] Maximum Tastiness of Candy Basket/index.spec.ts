import { describe, expect, it } from 'vitest';
import { maximumTastiness } from '.';

describe.skip('maximumTastiness', () => {
  it('should return 8 for [13,5,1,8,21,2] and 3', () => {
    const price = [13, 5, 1, 8, 21, 2];
    const k = 3;

    const result = maximumTastiness(price, k);

    expect(result).toBe(8);
  });

  it('should return 2 for [1,3,1] and 2', () => {
    const price = [1, 3, 1];
    const k = 2;

    const result = maximumTastiness(price, k);

    expect(result).toBe(2);
  });

  it('should return 0 for [7,7,7,7] and 2', () => {
    const price = [7, 7, 7, 7];
    const k = 2;

    const result = maximumTastiness(price, k);

    expect(result).toBe(0);
  });
});
