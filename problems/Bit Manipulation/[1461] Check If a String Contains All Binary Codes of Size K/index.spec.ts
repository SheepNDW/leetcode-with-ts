import { describe, expect, it } from 'vitest';
import { hasAllCodes } from '.';

describe('hasAllCodes', () => {
  it('example 1', () => {
    const s = '00110110';
    const k = 2;

    const result = hasAllCodes(s, k);

    expect(result).toBe(true);
  });

  it('example 2', () => {
    const s = '0110';
    const k = 1;

    const result = hasAllCodes(s, k);

    expect(result).toBe(true);
  });

  it('example 3', () => {
    const s = '0110';
    const k = 2;

    const result = hasAllCodes(s, k);

    expect(result).toBe(false);
  });
});
