import { describe, expect, it } from 'vitest';
import { lexicalOrder } from '.';

describe('lexicalOrder', () => {
  it('example 1', () => {
    const n = 13;

    const result = lexicalOrder(n);

    expect(result).toEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('example 2', () => {
    const n = 2;

    const result = lexicalOrder(n);

    expect(result).toEqual([1, 2]);
  });
});
