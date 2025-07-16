import { describe, expect, it } from 'vitest';
import { maximumLength } from '.';

describe('maximumLength', () => {
  it('example 1', () => {
    const nums = [1, 2, 3, 4];
    const result = maximumLength(nums);
    expect(result).toBe(4);
  });

  it('example 2', () => {
    const nums = [1, 2, 1, 1, 2, 1, 2];
    const result = maximumLength(nums);
    expect(result).toBe(6);
  });

  it('example 3', () => {
    const nums = [1, 3];
    const result = maximumLength(nums);
    expect(result).toBe(2);
  });
});
