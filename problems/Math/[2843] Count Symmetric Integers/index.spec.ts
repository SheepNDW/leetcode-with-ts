import { describe, expect, it } from 'vitest';
import { countSymmetricIntegers } from '.';

describe('countSymmetricIntegers', () => {
  it('example 1', () => {
    const low = 1;
    const high = 100;

    const result = countSymmetricIntegers(low, high);

    expect(result).toBe(9);
  });

  it('example 2', () => {
    const low = 1200;
    const high = 1230;

    const result = countSymmetricIntegers(low, high);

    expect(result).toBe(4);
  });
});
