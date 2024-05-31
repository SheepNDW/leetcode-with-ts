import { describe, expect, it } from 'vitest';
import { countTriplets } from '.';

describe.skip('countTriplets', () => {
  it('should return 4 for arr = [2, 3, 1, 6, 7]', () => {
    const arr = [2, 3, 1, 6, 7];

    const result = countTriplets(arr);

    expect(result).toBe(4);
  });

  it('should return 10 for arr = [1, 1, 1, 1, 1]', () => {
    const arr = [1, 1, 1, 1, 1];

    const result = countTriplets(arr);

    expect(result).toBe(10);
  });
});
