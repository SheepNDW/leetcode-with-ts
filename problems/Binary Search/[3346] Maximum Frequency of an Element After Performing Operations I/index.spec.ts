import { describe, expect, it } from 'vitest';
import { maxFrequency } from '.';
import TLECase from './TLECase';

describe('maxFrequency', () => {
  it('example 1', () => {
    const nums = [1, 4, 5];
    const k = 1;
    const numOperations = 2;

    const result = maxFrequency(nums, k, numOperations);

    expect(result).toEqual(2);
  });

  it('example 2', () => {
    const nums = [5, 11, 20, 20];
    const k = 5;
    const numOperations = 1;

    const result = maxFrequency(nums, k, numOperations);

    expect(result).toEqual(2);
  });

  it('TLE (3347)', () => {
    const nums = TLECase;
    const k = 1997676;
    const numOperations = 605;

    const result = maxFrequency(nums, k, numOperations);

    expect(result).toEqual(541);
  });
});
