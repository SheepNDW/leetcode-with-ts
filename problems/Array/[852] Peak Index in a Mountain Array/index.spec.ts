import { describe, expect, it } from 'vitest';
import { peakIndexInMountainArray } from '.';

describe('peakIndexInMountainArray', () => {
  it('should return 1 when arr=[0,1,0]', () => {
    const arr = [0, 1, 0];

    const result = peakIndexInMountainArray(arr);

    expect(result).toBe(1);
  });

  it('should return 1 when arr=[0,2,1,0]', () => {
    const arr = [0, 2, 1, 0];

    const result = peakIndexInMountainArray(arr);

    expect(result).toBe(1);
  });

  it('should return 1 when arr=[0,10,5,2]', () => {
    const arr = [0, 10, 5, 2];

    const result = peakIndexInMountainArray(arr);

    expect(result).toBe(1);
  });

  it('should return 3 when array is [1,2,3,5,4]', () => {
    const arr = [1, 2, 3, 5, 4];

    const result = peakIndexInMountainArray(arr);

    expect(result).toBe(3);
  });
});
