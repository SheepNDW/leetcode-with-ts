import { describe, expect, it } from 'vitest';
import { fractionToDecimal } from '.';

describe('fractionToDecimal', () => {
  it('example 1', () => {
    const numerator = 1;
    const denominator = 2;

    const result = fractionToDecimal(numerator, denominator);

    expect(result).toBe('0.5');
  });

  it('example 2', () => {
    const numerator = 2;
    const denominator = 1;

    const result = fractionToDecimal(numerator, denominator);

    expect(result).toBe('2');
  });

  it('example 3', () => {
    const numerator = 4;
    const denominator = 333;

    const result = fractionToDecimal(numerator, denominator);

    expect(result).toBe('0.(012)');
  });

  it('example 4', () => {
    const numerator = 0;
    const denominator = -3;

    const result = fractionToDecimal(numerator, denominator);

    expect(result).toBe('0');
  });
});
