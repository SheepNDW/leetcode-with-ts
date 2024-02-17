import { describe, expect, it } from 'vitest';
import { findLeastNumOfUniqueInts } from '.';

describe.skip('findLeastNumOfUniqueInts', () => {
  it('should return 1 when arr = [5,5,4], k = 1', () => {
    const arr = [5, 5, 4];
    const k = 1;
    const result = findLeastNumOfUniqueInts(arr, k);
    expect(result).toBe(1);
  });

  it('should return 2 when arr = [4,3,1,1,3,3,2], k = 3', () => {
    const arr = [4, 3, 1, 1, 3, 3, 2];
    const k = 3;
    const result = findLeastNumOfUniqueInts(arr, k);
    expect(result).toBe(2);
  });

  it('should return 3', () => {
    const arr = [
      24, 119, 157, 446, 251, 117, 22, 168, 374, 373, 323, 311, 441, 213, 120, 412, 200, 236, 328,
      24, 164, 104, 331, 32, 19, 223, 89, 114, 152, 82, 456, 381, 355, 343, 157, 245, 443, 368, 229,
      49, 82, 16, 373, 142, 240, 125, 8,
    ];
    const k = 41;
    const result = findLeastNumOfUniqueInts(arr, k);
    expect(result).toBe(3);
  });
});
