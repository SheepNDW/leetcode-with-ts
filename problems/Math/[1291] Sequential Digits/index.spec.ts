import { describe, expect, it } from 'vitest';
import { sequentialDigits } from '.';

describe.skip('sequentialDigits', () => {
  it('should return [123,234] for the range [100, 300]', () => {
    const low = 100;
    const high = 300;
    const expected = [123, 234];

    const result = sequentialDigits(low, high);

    expect(result).toEqual(expected);
  });

  it('should return [1234,2345,3456,4567,5678,6789,12345] for the range [1000, 13000]', () => {
    const low = 1000;
    const high = 13000;
    const expected = [1234, 2345, 3456, 4567, 5678, 6789, 12345];

    const result = sequentialDigits(low, high);

    expect(result).toEqual(expected);
  });

  it('should return [67,78,89,123] for the range [58,155]', () => {
    const low = 58;
    const high = 155;
    const expected = [67, 78, 89, 123];

    const result = sequentialDigits(low, high);

    expect(result).toEqual(expected);
  });

  it('should return correct sequentail digits for large high', () => {
    const low = 10;
    const high = 1000000000;
    const expected = [
      12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567,
      5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567,
      2345678, 3456789, 12345678, 23456789, 123456789,
    ];

    const result = sequentialDigits(low, high);

    expect(result).toEqual(expected);
  });
});
