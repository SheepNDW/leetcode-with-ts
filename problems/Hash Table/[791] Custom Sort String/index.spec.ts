import { describe, expect, it } from 'vitest';
import { customSortString } from '.';

describe.skip('customSortString', () => {
  it('should satisfy the order "cba" with s = "abcd", allowing "d" at any position', () => {
    const order = 'cba';
    const s = 'abcd';

    const result = customSortString(order, s);
    const orderIndexMap = new Map();
    order.split('').forEach((char, index) => orderIndexMap.set(char, index));

    // 檢查 result 中 'c', 'b', 'a' 的相對順序是否正確，並允許 'd' 在任意位置
    let isValidOrder =
      result.indexOf('c') < result.indexOf('b') && result.indexOf('b') < result.indexOf('a');
    let isDAtAnyPosition = result.includes('d');
    expect(isValidOrder).toBe(true);
    expect(isDAtAnyPosition).toBe(true);
  });

  it('should return "bcad" or any valid permutation for order = "bcafg" and s = "abcd"', () => {
    const order = 'bcafg';
    const s = 'abcd';

    const result = customSortString(order, s);
    const orderIndexMap = new Map();
    order.split('').forEach((char, index) => orderIndexMap.set(char, index));

    // 檢查 result 中 'b', 'c', 'a' 的相對順序是否正確，並允許 'd' 在任意位置
    let isValidOrder =
      result.indexOf('b') < result.indexOf('c') && result.indexOf('c') < result.indexOf('a');
    let isDAtAnyPosition = result.includes('d');
    expect(isValidOrder).toBe(true);
    expect(isDAtAnyPosition).toBe(true);
  });
});
