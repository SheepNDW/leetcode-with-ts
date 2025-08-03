import { describe, expect, it } from 'vitest';
import { subarrayBitwiseORs } from '.';

describe('subarrayBitwiseORs', () => {
  it('example 1', () => {
    const arr = [0];
    const result = subarrayBitwiseORs(arr);
    expect(result).toBe(1);
  });

  it('example 2', () => {
    const arr = [1, 1, 2];
    const result = subarrayBitwiseORs(arr);
    expect(result).toBe(3);
  });

  it('example 3', () => {
    const arr = [1, 2, 4];
    const result = subarrayBitwiseORs(arr);
    expect(result).toBe(6);
  });
});
