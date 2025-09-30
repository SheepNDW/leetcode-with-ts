import { describe, expect, it } from 'vitest';
import { triangleNumber } from '.';

describe('triangleNumber', () => {
  it('example 1', () => {
    const nums = [2, 2, 3, 4];
    const result = triangleNumber(nums);
    expect(result).toEqual(3);
  });

  it('example 2', () => {
    const nums = [4, 2, 3, 4];
    const result = triangleNumber(nums);
    expect(result).toEqual(4);
  });
});
