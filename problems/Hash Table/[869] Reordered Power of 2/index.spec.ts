import { describe, expect, it } from 'vitest';
import { reorderedPowerOf2 } from '.';

describe('reorderedPowerOf2', () => {
  it('example 1', () => {
    const n = 1;
    const result = reorderedPowerOf2(n);
    expect(result).toBe(true);
  });

  it('example 2', () => {
    const n = 10;
    const result = reorderedPowerOf2(n);
    expect(result).toBe(false);
  });

  it('example 3', () => {
    const n = 46;
    const result = reorderedPowerOf2(n);
    expect(result).toBe(true);
  });
});
