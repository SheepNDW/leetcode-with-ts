import { describe, expect, it } from 'vitest';
import { maximumElementAfterDecrementingAndRearranging } from '.';

describe.skip('maximumElementAfterDecrementingAndRearranging', () => {
  it('should return 2 when given [2,2,1,2,1]', () => {
    const arr = [2, 2, 1, 2, 1];

    const result = maximumElementAfterDecrementingAndRearranging(arr);

    expect(result).toEqual(2);
  });

  it('should return 3 when given [100,1,1000]', () => {
    const arr = [100, 1, 1000];

    const result = maximumElementAfterDecrementingAndRearranging(arr);

    expect(result).toEqual(3);
  });

  it('should return 5 when given [1,2,3,4,5]', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = maximumElementAfterDecrementingAndRearranging(arr);

    expect(result).toEqual(5);
  });

  it('should return 1 when given [1]', () => {
    const arr = [1];

    const result = maximumElementAfterDecrementingAndRearranging(arr);

    expect(result).toEqual(1);
  });

  it('should return 4 when given [4,3,2,1]', () => {
    const arr = [4, 3, 2, 1];

    const result = maximumElementAfterDecrementingAndRearranging(arr);

    expect(result).toEqual(4);
  });

  it('should return 6 when given [10,8,7,6,5]', () => {
    const arr = [10, 8, 7, 6, 5];

    const result = maximumElementAfterDecrementingAndRearranging(arr);

    expect(result).toEqual(5);
  });
});
