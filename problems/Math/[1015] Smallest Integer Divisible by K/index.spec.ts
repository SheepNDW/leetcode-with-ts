import { describe, expect, it } from 'vitest';
import { smallestRepunitDivByK } from '.';

describe('smallestRepunitDivByK', () => {
  it('example 1', () => {
    const k = 1;

    const result = smallestRepunitDivByK(k);

    expect(result).toBe(1);
  });

  it('example 2', () => {
    const k = 2;

    const result = smallestRepunitDivByK(k);

    expect(result).toBe(-1);
  });

  it('example 3', () => {
    const k = 3;

    const result = smallestRepunitDivByK(k);

    expect(result).toBe(3);
  });
});
