import { describe, expect, it } from 'vitest';
import { totalFruit } from '.';

describe('totalFruit', () => {
  it('example 1', () => {
    const fruits = [1, 2, 1];

    const result = totalFruit(fruits);

    expect(result).toBe(3);
  });

  it('example 2', () => {
    const fruits = [0, 1, 2, 2];

    const result = totalFruit(fruits);

    expect(result).toBe(3);
  });

  it('example 3', () => {
    const fruits = [1, 2, 3, 2, 2];

    const result = totalFruit(fruits);

    expect(result).toBe(4);
  });
});
