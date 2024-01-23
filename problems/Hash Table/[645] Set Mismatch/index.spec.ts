import { describe, expect, it } from 'vitest';
import { findErrorNums } from '.';

describe.skip('findErrorNums', () => {
  it('should return [2, 3] for input [1, 2, 2, 4]', () => {
    const nums = [1, 2, 2, 4];
    const expected = [2, 3];

    const result = findErrorNums(nums);

    expect(result).toEqual(expected);
  });

  it('should return [1, 2] for input [1, 1]', () => {
    const nums = [1, 1];
    const expected = [1, 2];

    const result = findErrorNums(nums);

    expect(result).toEqual(expected);
  });
});
