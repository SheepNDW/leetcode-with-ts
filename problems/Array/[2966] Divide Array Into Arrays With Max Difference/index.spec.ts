import { describe, expect, it } from 'vitest';
import { divideArray } from '.';

describe.skip('divideArray', () => {
  it('should divide array [1,3,4,8,7,9,3,5,1] with k = 2 into valid subarrays', () => {
    const nums = [1, 3, 4, 8, 7, 9, 3, 5, 1];
    const k = 2;

    const result = divideArray(nums, k);

    expect(result.length).toBe(3); // 檢查是否有三個子陣列
    for (const subarray of result) {
      expect(subarray.length).toBe(3); // 每個子陣列長度為 3
      expect(Math.max(...subarray) - Math.min(...subarray)).toBeLessThanOrEqual(k); // 子陣列元素差值小於等於 k
    }
  });

  it('should return empty array for [1,3,3,2,7,3] with k = 3 as it cannot be divided', () => {
    const nums = [1, 3, 3, 2, 7, 3];
    const k = 3;

    const result = divideArray(nums, k);

    expect(result).toEqual([]); // 應回傳空陣列
  });
});
