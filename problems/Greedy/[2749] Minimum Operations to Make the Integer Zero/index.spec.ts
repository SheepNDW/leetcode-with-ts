import { describe, expect, it } from 'vitest';
import { makeTheIntegerZero } from '.';

describe('makeTheIntegerZero', () => {
  it('example 1', () => {
    const num1 = 3;
    const num2 = -2;

    const result = makeTheIntegerZero(num1, num2);

    expect(result).toEqual(3);
  });

  it('example 2', () => {
    const num1 = 5;
    const num2 = 7;

    const result = makeTheIntegerZero(num1, num2);

    expect(result).toEqual(-1);
  });

  it('example 3', () => {
    const num1 = 112577768;
    const num2 = -501662198;

    const result = makeTheIntegerZero(num1, num2);

    expect(result).toEqual(16);
  });
});
