import { describe, expect, it } from 'vitest';
import { sortByBits } from '.';

describe.skip('Function sortByBits', () => {
  it('should sort the array based on the number of 1-bits: Regular Array', () => {
    const arr = [3, 1, 2, 4];
    const expected = [1, 2, 4, 3];

    const result = sortByBits(arr);

    expect(result).toEqual(expected);
  });

  it('should sort the array based on the number of 1-bits: Array of Powers of 2', () => {
    const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
    const expected = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

    const result = sortByBits(arr);

    expect(result).toEqual(expected);
  });
});
